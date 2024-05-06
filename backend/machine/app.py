from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

# Load the machine learning model from the pickle file
model = pickle.load(open(r"C:\xampp\htdocs\plant-it-to-live\backend\machine\LogisticRegression.pkl", 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    # Get input data from JSON request
    data = request.json
    
    # Extract features from the input data
    n = int(data['n'])
    pho = int(data['pho'])
    po = int(data['po'])
    T = float(data['T'])
    PH = float(data['PH'])
    H = float(data['H'])
    R = float(data['R'])
    
    # Preprocess the input data (if needed)
    # For example, you might need to scale the features or perform other transformations
    
    # Make prediction using the model
    prediction = model.predict([[n, pho, po, T, PH, H, R]])
    
    # Convert prediction to a human-readable format (if needed)
    # For example, if your model outputs numeric labels, you might need to map them to class names
    
    # Prepare response data
    response_data = {
        'prediction': prediction[0]  # Assuming the model returns a single prediction
    }

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
