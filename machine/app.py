from flask import Flask, request, jsonify
import torch
from torchvision import transforms
from PIL import Image
import joblib
from io import BytesIO
import torch.nn as nn  # Add this line
import pickle
from resnet9_model import ResNet9 
app = Flask(__name__)
# for calculating the accuracy
@app.route('/predict', methods=['POST'])
def predict():
    model1 = joblib.load(open(r"C:\xampp\htdocs\plant-it-to-live\machine\RandomForest.pkl", 'rb'))
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
    prediction = model1.predict([[n, pho, po, T, PH, H, R]])
    # Prepare response data
    response_data = {
        'prediction': prediction[0]  # Assuming the model returns a single prediction
    }
    return jsonify(response_data)
@app.route('/detect', methods=['POST'])
def detect():
    # Load the model
    model2 = torch.load(r"C:\xampp\htdocs\plant-it-to-live\machine\plant-disease-model-complete (1).pth", map_location=torch.device('cpu'))
    model2.eval()

    # Define preprocessing transform
   # Define preprocessing transform
    preprocess = transforms.Compose([
    transforms.Resize((256, 256)),  # Resize to 256x256
    #transforms.CenterCrop(224),      # Center crop to 224x224
    transforms.ToTensor(),
    
])

    classes=[
        'Apple___Apple_scab',
        'Apple___Black_rot',
        'Apple___Cedar_apple_rust',
        'Apple___healthy',
        'Blueberry___healthy',
        'Cherry_(including_sour)_Powdery_mildew',
        'Cherry_(including_sour)_healthy',
        'Corn_(maize)_Cercospora_leaf_spot Gray_leaf_spot',
        'Corn_(maize)Common_rust',
        'Corn_(maize)_Northern_Leaf_Blight',
        'Corn_(maize)_healthy',
        'Grape___Black_rot',
        'Grape__Esca(Black_Measles)',
        'Grape__Leaf_blight(Isariopsis_Leaf_Spot)',
        'Grape___healthy',
        'Orange__Haunglongbing(Citrus_greening)',
        'Peach___Bacterial_spot',
        'Peach___healthy',
        'Pepper,bell__Bacterial_spot',
        'Pepper,bell__healthy',
        'Potato___Early_blight',
        'Potato___Late_blight',
        'Potato___healthy',
        'Raspberry___healthy',
        'Soybean___healthy',
        'Squash___Powdery_mildew',
        'Strawberry___Leaf_scorch',
        'Strawberry___healthy',
        'Tomato___Bacterial_spot',
        'Tomato___Early_blight',
        'Tomato___Late_blight',
        'Tomato___Leaf_Mold',
        'Tomato___Septoria_leaf_spot',
        'Tomato___Spider_mites Two-spotted_spider_mite',
        'Tomato___Target_Spot',
        'Tomato___Tomato_Yellow_Leaf_Curl_Virus',
        'Tomato___Tomato_mosaic_virus',
        'Tomato___healthy',
    ]
    def predict_image_from_path(image_path, model):
        try:
            # Open and preprocess the image
            image = Image.open(image_path).convert('RGB')
            image = preprocess(image).unsqueeze(0)
            # Make prediction
            with torch.no_grad():
                outputs = model(image)
                _, predicted = torch.max(outputs, 1)
                predicted_class = predicted.item()
            
            return predicted_class, None
        except Exception as e:
            return None, str(e)

    data = request.get_json()
    if data is None or 'image_path' not in data:
        return jsonify({'error': 'Image path not provided'})
    
    image_path = data['image_path']
    if not image_path:
        return jsonify({'error': 'Invalid image path'})

    try:
        print(len(classes))
        class_idx, error = predict_image_from_path(image_path, model2)
        if error is not None:
            return jsonify({'error': error})
        else:
            return jsonify({'prediction':classes[class_idx],'id':class_idx })
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)