import mixpanel from 'mixpanel-browser';

class Mixpanel {

    init(){
        mixpanel.init(process.env.VITE_MIXPANEL_KEY ? process.env.VITE_MIXPANEL_KEY : '', {debug: false}); 
    }

    setUserData({uid, proff, email, name}: {uid: string, proff: string, email: string, name: string}){
        mixpanel.register({uid, proff, 'Email': email, name, email, 'Name': name});
        mixpanel.identify(uid);
        mixpanel.people.set({uid, proff, 'Email': email, email, name, 'Name': name});
    }

    record({eventName, eventProperties}: {eventName: string, eventProperties: Record<string, any>}){

        if ((window.location.origin).includes('localhost')){
            return false;
        }

        try{
            mixpanel.track(eventName, eventProperties, {send_immediately: true});
        }
        catch(e){
            console.log(e);
        }
    }


}


export default new Mixpanel()