from flask import Flask, jsonify, request
import mysql.connector

app = Flask(__name__)

bd = mysql.connector.connect(host='localhost', user='alumno', passwd='12345', database='contactos')
cursor = bd.cursor()

@app.route('/contactos/', methods=["GET", "POST", "DELETE"])
def peliculas():
    if request.method == "GET":
        movies = []
        query = "SELECT * FROM contacto"
        cursor.execute(query)

        for movie in cursor.fetchall():
            d = {
                'id': movie[0],
                'nombre': movie[1],
                'correo': movie[2],
                'telefono': movie[3],
                'facebook': movie[4],
                'twitter': movie[5],
                'instagram': movie[6],
                'img': movie[7]
            }
            movies.append(d)
            # print(movie)
        print(movies)
        return jsonify(movies)
    if request.method == "DELETE":
        data = request.get_json()
        query = "DELETE FROM contacto WHERE nombre = %s"
        cursor.execute(query, (data['nombre']))

        bd.commit()

        if cursor.rowcount:
            return jsonify({'data': 'Ok'})
        else:
            return jsonify({'data': 'Error'})
    else:
        data = request.get_json()
        print(data)
        query = "INSERT INTO contacto(nombre, correo," \
                "telefono, facebook, twitter, instagram, img) VALUES(%s, %s, %s, %s, %s, %s, %s)"

        cursor.execute(query, (data['nombre'],
                               data['correo'],
                               data['telefono'],
                               data['facebook'],
                               data['twitter'],
                               data['instagram'],
                               data['img']))
        bd.commit()

        if cursor.rowcount:
            return jsonify({'data': 'Ok'})
        else:
            return jsonify({'data': 'Error'})

app.run(debug=True)