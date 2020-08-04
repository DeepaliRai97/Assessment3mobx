const Realm = require('realm');
export const addUser = async(userData)=>{
    Realm.open({schema:[Schemas]})
    .then(realm=>{
        realm.write(()=>{
            realm.create(
                'signupUser',{
                    username:userData.username,
                    email_id:userData.email_id,
                    userpassword:userData.password
                }
            )
        })
    }).catch(error=>{console.log(error)})
    console.log('Done');
    console.log(userData[1]);
}