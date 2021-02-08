#카카오 개발 사용/키워드로 주소검색 기능 사용
import requests
import json
import sys
#from search_for_info import t_invoice, name

#어느 authorization? 카카오 REST API?
def get_location (keyword:str):

    headers: dict = {'Authorization': 'KakaoAK 621d676082f6705f0a49afcac59d2762'} #secret key  
    params: dict = {'query': keyword}
    req = requests.get('https://dapi.kakao.com/v2/local/search/keyword.json?', headers=headers,params=params)

    info: dict= json.loads(req.text)
    print(info)

#    if info['meta']['total_count'] != 0:
#여기에서 lat 이랑 long 을 string 으로 받으면 안된다.  list 안에 dictionary 가 있기 때문. 
      송장번호, 택배사 이름 예시 가지고 오기 
      document 리스트 안에 아무것도없음..      
#     location: tuple = (info['documents'][0]['x'], info['documents'][0]['y'])
#    print("The geolocation of the place is:")
#    print(location)
#    else:
#        raise Exception
     #   ....

#is this module being run directly by python or is it being imported?
if __name__=="__main__":
    #get input from the user 지점으로 받기
    #search_for_info.tracking()
    #location: tuple = get_location('')    
    name: str = input("택배사 이름:")
    invoice: str = input("송장번호")
 
    keyword = name + invoice
    get_location(keyword)
    #a,b= input("What is the name of the Company and the location?").split()
    #keyword = a+b
    #location(keyword)
    #send keyword and run where()


