import requests
import json

#어느 authorization? 카카오 REST API?
#def Get_location(keyword):

def where(keyword):

    headers: dict = {'Authorization': 'KakaoAK 621d676082f6705f0a49afcac59d2762'} #secret key  
    keyword: dict = {'query': keyword}
    req = requests.get('https://dapi.kakao.com/v2/local/search/keyword.json?', headers=headers,params=keyword)

    info: dict= json.loads(req.text)
    #print(info)

#여기에서 lat 이랑 long 을 string 으로 받으면 안된다.  list 안에 dictionary 가 있기 때문. 
    location: tuple = (info['documents'][0]['x'], info['documents'][0]['y'])
    print("The geolocation of the place is:")
    print(location)

#is this module being run directly by python or is it being imported?
if __name__=="__main__":
    #get input from the user
    keyword = input("What is the name of the location?")

    where(keyword)
    #send keyword and run where()


