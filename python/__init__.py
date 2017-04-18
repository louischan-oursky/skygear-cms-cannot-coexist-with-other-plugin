import skygear

@skygear.op('hello')
def hello():
    return {
        'message': 'hello',
    }
