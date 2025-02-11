import streamlit as st
import pandas as pd
import pickle as pk

model = pk.load(open('model.pkl','rb'))
scaler = pk.load(open('scaler.pkl','rb'))

st.header('Loan Prediction App')

no_of_dep = st.number_input('Choose No of dependents', min_value=0, max_value=5, step=1)
grad = st.selectbox('Choose Education', ['Graduated', 'Not Graduated'])
self_emp = st.selectbox('Self Employed?', ['Yes', 'No'])
Annual_Income = st.number_input('Choose Annual Income', min_value=0, max_value=10000000, step=1000)
Loan_Amount = st.number_input('Choose Loan Amount', min_value=0, max_value=10000000, step=1000)
Loan_Dur = st.number_input('Choose Loan Duration (years)', min_value=0, max_value=20, step=1)
Cibil = st.number_input('Choose Cibil Score', min_value=0, max_value=1000, step=1)
Assets = st.number_input('Choose Assets', min_value=0, max_value=10000000, step=1000)

grad_s = 0 if grad == 'Graduated' else 1
emp_s = 0 if self_emp == 'No' else 1


assets_condition = Assets >= Loan_Amount or Assets >= (0.8 * Loan_Amount)
income_condition = (Annual_Income * Loan_Dur) >= Loan_Amount or (Annual_Income * Loan_Dur) >= (0.8 * Loan_Amount)

if st.button("Predict"):
    pred_data = pd.DataFrame([[no_of_dep, grad_s, emp_s, Annual_Income, Loan_Amount, Loan_Dur, Cibil, Assets]],
                             columns=['no_of_dependents', 'education', 'self_employed', 'income_annum', 'loan_amount', 
                                      'loan_term', 'cibil_score', 'Assets'])
    
    pred_data = scaler.transform(pred_data)
    predict = model.predict(pred_data)
    
    if predict[0] == 1: 
        if assets_condition and income_condition:  
            st.markdown("Congratulations! You have a high chance of getting a loan! ")
        else:
            rejection_reason = ""
            if not assets_condition:
                rejection_reason = ("Loan Rejected: Your assets are lower than the required amount. "
                                    "To increase your chances of approval, consider increasing your assets "
                                    "or reducing the loan amount.")
            if not income_condition:
                if rejection_reason:
                    rejection_reason += "\n\nAdditionally, "
                rejection_reason += ("Loan Rejected: Your income over the selected duration is insufficient. "
                                     "To improve approval chances, consider increasing your annual income "
                                     "or selecting a longer loan duration.")
            st.markdown(rejection_reason)
    else:
        st.markdown("Loan Rejected: Your application did not meet the required criteria.")
