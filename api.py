from flask import Flask, json
from flask_cors import CORS, cross_origin

cars = [{"id": 1, "name": "Fox"}, {"id": 2, "name": "Onyx"}, {"id": 3, "name": "Cruze"}]

api = Flask(__name__)
cors = CORS(api)
api.config['CORS_HEADERS'] = 'Content-Type'

@api.route('/cars', methods=['GET'])
@cross_origin()
def get_cars():
  return json.dumps(cars)

if __name__ == '__main__':
    api.run() 