
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import confusion_matrix, classification_report
df = pd.read_csv("churn.csv")
df['Contract'].value_counts()
df.isnull().sum()
columns_to_keep = ['gender', 'SeniorCitizen', 'Partner', 'Dependents', 'tenure', 'PhoneService', 'MultipleLines', 'Contract', 'TotalCharges', 'Churn']
df = df[columns_to_keep]
from sklearn.preprocessing import LabelEncoder
label_encoder = LabelEncoder()
categorical_cols = ['gender', 'Partner', 'Dependents', 'PhoneService', 'MultipleLines', 'Contract', 'Churn']
for col in categorical_cols:
    df[col] = label_encoder.fit_transform(df[col])
binary_columns = ['Partner', 'Dependents', 'PhoneService', 'Churn']
df[binary_columns] = df[binary_columns].replace({'Yes':1,'No':0})
df[['MultipleLines','Contract']] = df[['MultipleLines','Contract']].replace({'Yes':1,'No':0,'No phone service':2,"Month-to-month":1,'One year':2,'Two year':3})
df['gender'] = df['gender'].replace({'Male':1,'Female':0})
X = df.drop('Churn', axis=1)
y = df['Churn']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
X_train['TotalCharges'] = pd.to_numeric(X_train['TotalCharges'], errors='coerce')
X_test['TotalCharges'] = pd.to_numeric(X_test['TotalCharges'], errors='coerce')
X_train['TotalCharges'].fillna(X_train['TotalCharges'].mean(), inplace=True)
X_test['TotalCharges'].fillna(X_test['TotalCharges'].mean(), inplace=True)
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)
lg = LogisticRegression()
lg.fit(X_train,y_train)
y_pred = lg.predict(X_test)
from sklearn.metrics import accuracy_score
accuracy_score(y_test,y_pred)

import pickle
pickle.dump(lg,open("logistic_model.pkl",'wb'))
def prediction(gender,Seniorcitizen,Partner,Dependents,tenure,Phoneservice,multiline,contact,totalcharge):
    data = {
    'gender': [gender],
    'SeniorCitizen': [Dependents],
    'Partner': [Partner],
    'Dependents': [Phoneservice],
    'tenure': [tenure],
    'PhoneService': [Phoneservice],
    'MultipleLines': [multiline],
    'Contract': [contact],
    'TotalCharges': [totalcharge]
    }
    df = pd.DataFrame(data)


   
    categorical_columns = ['gender', 'SeniorCitizen', 'Partner', 'Dependents', 'PhoneService', 'MultipleLines', 'Contract']
    for column in categorical_columns:
        df[column] = label_encoder.fit_transform(df[column])
    df = scaler.fit_transform(df)

    result = lg.predict(df).reshape(1,-1)
    return result[0]
gender = "Female"
Seniorcitizen = "No"
Partner = "Yes"
Dependents = "No"
tenure = 1
Phoneservice="No"
multiline = "No phone service"
contact="Month-to-month"
totalcharge = 29.85
result = prediction(gender,Seniorcitizen,Partner,Dependents,tenure,Phoneservice,multiline,contact,totalcharge)

if result==1:
    print('churn')
else:
    print('not churn')