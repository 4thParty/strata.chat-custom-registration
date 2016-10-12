@regStream = new Meteor.Streamer 'custom-registration'

if Meteor.isClient
    Meteor.startup ->
        RocketChat.callbacks.add 'submitUserDetails', (userId) =>
            debugger 
            regStream.emit 'customRegistrationEvent', userId

            return userId
        , RocketChat.callbacks.priority.LOW

        RocketChat.callbacks.add 'skipUserDetails', (userId) =>
            debugger 
            regStream.emit 'customRegistrationEvent', userId

            return userId            
        , RocketChat.callbacks.priority.LOW
else
    regStream.allowRead 'custom-registration', 'all'
    regStream.allowWrite 'custom-registration', 'all'
    regStream.allowEmit 'custom-registration', 'all'

    regStream.allowRead 'customRegistrationEvent', 'all'
    regStream.allowWrite 'customRegistrationEvent', 'all'
    #regStream.allowEmit 'customRegistrationEvent', (eventName, msg, options) ->
    regStream.allowEmit 'customRegistrationEvent', 'all'
        #debugger
        #return true