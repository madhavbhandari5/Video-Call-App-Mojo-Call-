// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "channels"
import roomChannel from '../channels/room_channel'


document.addEventListener('DOMContentLoaded', (event) => {
    var calls = document.getElementsByClassName('call-button')
    for (let call of calls) {
        console.log('Call: ', call)
        call.addEventListener('click', (e) => {
            e.preventDefault();
            let recipient_id = call.getAttribute('data-id')
            let recipient_name = call.getAttribute('data-username')
            document.getElementById('recipient_name').innerHTML = recipient_name
            document.getElementById('sender-notif').classList.toggle('d-none')
            roomChannel.call(recipient_id)
        })
    }

    var answer_btn = document.getElementById('answer-call')
    answer_btn.addEventListener('click', event => {
        event.preventDefault()
        let session_id = document.getElementById('session_id').textContent
        let sender_id = document.getElementById('sender_id').textContent
        document.getElementById('receiver-notif').classList.toggle('d-none')
        roomChannel.answer(session_id, sender_id)
    })
})

 