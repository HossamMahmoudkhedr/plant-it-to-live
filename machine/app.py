from flask import Flask, request, jsonify
import torch
from torchvision import transforms
from PIL import Image
import joblib
from io import BytesIO
import torch.nn as nn  
from resnet9_model import ResNet9 
app = Flask(__name__)
@app.route('/predict', methods=['POST'])
def predict():
    model1 = joblib.load(open(r"C:\xampp\htdocs\plant-it-to-live\machine\RandomForest.pkl", 'rb'))
    data = request.json
    n = int(data['n'])
    pho = int(data['pho'])
    po = int(data['po'])
    T = float(data['T'])
    PH = float(data['PH'])
    H = float(data['H'])
    R = float(data['R'])
    prediction = model1.predict([[n, pho, po, T, PH, H, R]])
    response_data = {
        'prediction': prediction[0]  
    }
    return jsonify(response_data)
@app.route('/detect', methods=['POST'])
def detect():
    model2 = torch.load(r"C:\xampp\htdocs\plant-it-to-live\machine\plant-disease-model-complete (1).pth", map_location=torch.device('cpu'))
    model2.eval()
    preprocess = transforms.Compose([
    transforms.Resize((256, 256)), 
    transforms.ToTensor(),  
])
    classes=[
        'Apple Apple scab',
        'Apple Black rot',
        'Apple Cedar apple rust',
        'Apple healthy',
        'Blueberry healthy',
        'Cherry (including_sour) Powdery mildew',
        'Cherry (including_sour) healthy',
        'Corn (maize) Cercospora leaf spot Gray leaf spot',
        'Corn (maize)Common rust',
        'Corn (maize) Northern Leaf Blight',
        'Corn (maize) healthy',
        'Grape Black rot',
        'Grape Esca(Black Measles)',
        'Grape Leaf blight(Isariopsis Leaf Spot)',
        'Grape healthy',
        'Orange Haunglongbing(Citrus greening)',
        'Peach Bacterial spot',
        'Peach healthy',
        'Pepper,bell Bacterial spot',
        'Pepper,bell healthy',
        'Potato Early blight',
        'Potato Late blight',
        'Potato healthy',
        'Raspberry healthy',
        'Soybean healthy',
        'Squash Powdery mildew',
        'Strawberry Leaf scorch',
        'Strawberry healthy',
        'Tomato Bacterial spot',
        'Tomato Early blight',
        'Tomato Late blight',
        'Tomato Leaf Mold',
        'Tomato Septoria leaf spot',
        'Tomato Spider_mites Two spotted spider mite',
        'Tomato Target Spot',
        'Tomato Tomato Yellow Leaf Curl Virus',
        'Tomato Tomato mosaic virus',
        'Tomato healthy',
    ]
    def predict_image_from_path(image_path, model):
        try:
            image = Image.open(image_path).convert('RGB')
            image = preprocess(image).unsqueeze(0)
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
            return jsonify({'prediction':classes[class_idx]})
    except Exception as e:
        return jsonify({'error': str(e)})
if __name__ == '__main__':
    app.run(debug=True)