@regStream = new Meteor.Streamer 'custom-registration'

if Meteor.isClient
    Meteor.startup ->

        emitRegistrationEvent = (userId, skipped) ->
            user = Meteor.users.findOne(userId)
            if user
                regStream.emit 'customRegistrationEvent', user.username, {skipped : skipped}


        RocketChat.callbacks.add 'submitUserDetails', (userId) =>
            #debugger 
            emitRegistrationEvent userId, false

            return userId
        , RocketChat.callbacks.priority.LOW

        RocketChat.callbacks.add 'skipUserDetails', (userId) =>
            #debugger 
            emitRegistrationEvent userId, true

            return userId            
        , RocketChat.callbacks.priority.LOW
else
    regStream.allowRead 'all'
    regStream.allowWrite 'all'
