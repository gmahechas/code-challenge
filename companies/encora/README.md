## Installation

```console
// first terminal (frontend) (node v20.9.0)
foo@bar:~$ cd packages/frontend
foo@bar:~$ npm i
foo@bar:~$ npm start

// second terminal (frontend) (python 3.11.3)
foo@bar:~$ cd packages/backend
foo@bar:~$ py -m venv venv --prompt encora
foo@bar:~$ source venv/bin/activate
foo@bar:~$ pip install -r requirements.txt
foo@bar:~$ flask --app flaskr run --debug
```

## Test
```console
// first terminal (frontend) (node v20.9.0)
foo@bar:~$ npm run ng test
foo@bar:~$ npm run ng test -- --code-coverage

// second terminal (frontend) (python 3.11.3)
foo@bar:~$ py -m unittest flaskr/utils/test/read_file_unittest.py
```
