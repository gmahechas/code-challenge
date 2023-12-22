import requests


class HttpClient:

    @staticmethod
    def get(url):
        try:
            response = requests.get(url, stream=True)

            if response.status_code == 200:
                return response
        except Exception:
            raise Exception("There was an error")
