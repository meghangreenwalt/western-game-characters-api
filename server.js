const express = require('express')
const app = express()
const PORT = 8000


const characters =  {
    'al preacher':{
        'name': 'Al Preacher',
        'lives': '4',
        'ability': 'If another player plays a blue or orange-bordered card, you may pay 2 cubes to draw 1 card from the deck'
    },
    'apache kid': {
        'name': 'Apache Kid',
        'lives': '3',
        'ability': 'Card of Diamond played by other players do not affect him'
    },

     'bart cassidy': {
        'name': 'Bart Cassidy',
        'lives': '4',
        'ability': 'Each time he is hit, he draws a card'
    },
    'bass greeves': {
        'name': 'Bass Greeves',
        'lives': '4',
        'ability': 'Once during your turn, you may discard 1 card from your hand to add 2 cubes to one of your cards'
    },
    'belle star': {
        'name': 'Belle Star',
        'lives': '4',
        'ability': 'During her turn cards in play in front of other players have no effect'
    },
    'bill noface': {
        'name': 'Bill Noface',
        'lives': '4',
        'ability': 'He draws 1 card, plus 1 card for each wound he has'
    },
    'black flower': {
        'name': 'Black Flower',
        'lives': '4',
        'ability': 'Once during your turn, you may use any Clubs card as an extra BANG!'
    },
    'black jack': {
        'name': 'Black Jack',
        'lives': '4',
        'ability': 'He shows the second card he draws. on Heart or Diamond, he draws on more card'
    },
    'bloody mary': {
        'name': 'Bloody Mary',
        'lives': '4',
        'ability': 'Each time your BANG! card is canceled, draw 1 card from the deck'
    },
    'calamity janet': {
        'name': 'Calamity Janet',
        'lives': '4',
        'ability': 'She can play BANG! cards as Missed! cards and vice versa.'
    },
    'chuck wengam': {
        'name': 'Chuck Wengam',
        'lives': '4',
        'ability': 'During his turn, he many choose to lose 1 life point to draw 2 cards.'
    },
    'claus the saint': {
        'name': 'Claus the Saint',
        'lives': '3',
        'ability': 'He draws one card more than the number of players, keeps 2 for himself, then gives 1 to each player.'
    },
    'colorado bill': {
        'name': 'Colorado Bill',
        'lives': '4',
        'ability': 'Each time you play a BANG! card,"draw!": on Spades, this shot cannot be avoided.'
    },
    'der spot-burst ringer': {
        'name': 'Der Spot-Burst Ringer',
        'lives': '4',
        'ability': 'Once during your turn, you may use a BANG! card as a Gatling.'
    },
    'doc holiday': {
        'name': 'Doc Holiday',
        'lives': '4',
        'ability': 'During his turn, he many discard once 2 cards from the hand to shoot a BANG!.'
    },
    'elena fuente': {
        'name': 'Elena Fuente',
        'lives': '3',
        'ability': 'She many use any card as Missed!'
    },
    'el gringo': {
        'name': 'El Gringo',
        'lives': '3',
        'ability': 'Each time he is hit by a player, he draws a card from the hand of that player.'
    },
    'evelyn shebang': {
        'name': 'Evelyn Shebang',
        'lives': '4',
        'ability': 'You may refuse to draw cards in your draw phase. For each card skipped shoot a BANG! at a different target in reachable distance.'
    },
    'frankie canton': {
        'name': 'Frankie Canton',
        'lives': '4',
        'ability': 'Once during your turn, you may take 1 cube from any card and move it here.'
    },
    'greg digger': {
        'name': 'Greg Digger',
        'lives': '4',
        'ability': 'Each time another player is eliminated, he regains 2 life points'
    },
    'henry block': {
        'name': 'Henry Block',
        'lives': '4',
        'ability': 'Any player drawing or discarding on of your cards (in hand or in play) is the target of a BANG!'
    },
    'herb hunter': {
        'name': 'Herb Hunter',
        'lives': '4',
        'ability': 'Each time another player is eliminated, he draws 2 extra cards'
    },
    'jesse jones': {
        'name': 'Jesse Jones',
        'lives': '4',
        'ability': 'He may draw his first card from the hand of a player'
    },
    'johnny kisch': {
        'name': 'Johnny Kisch',
        'lives': '4',
        'ability': 'Each time he puts a card into play all other cards in play with the same name are discarded.'
    },
    'jose delgado': {
        'name': 'Jose Delgado',
        'lives': '4',
        'ability': 'Twice in his turn, he may discard a blue card from the hand to draw 2 cards.'
    },
    'jourdonnais': {
        'name': 'Jourdonnais',
        'lives': '4',
        'ability': 'Whenever he is the target of a BANG!, he may "draw!": on a Heart, he is missed.'
    },
    'julie cutter': {
        'name': 'Julie Cutter',
        'lives': '4',
        'ability': 'Each time a player makes you lose at least 1 life point, "draw!": on a Heart or Diamond they are the target of a BANG!.'
    },
    'kit carlson': {
        'name': 'Kit Carlson',
        'lives': '4',
        'ability': 'He looks at the top 3 cards of the deck and chooses the 2 to draw.'
    },
    'lemonade jim': {
        'name': 'Lemonade Jim',
        'lives': '4',
        'ability': 'Each time another player plays a Beer card, you may discard any card from hand to also regain 1 life point.'
    },
    'lucky duke': {
        'name': 'Lucky Duke',
        'lives': '4',
        'ability': 'Each time he "draws!", he flips the top 2 cards and chooses one.'
    },
    'mexicali kid': {
        'name': 'Mexicali Kid',
        'lives': '4',
        'ability': 'Once during your turn, you many pay 2 cubes to shoot 1 extra BANG!(no card required).'
    },
    'mick defender': {
        'name': 'Mich Defender',
        'lives': '4',
        'ability': 'If you are the target of a brown card other than BANG!, you may use a Missed! card to avoid that card.'
    },
    'molly stark': {
        'name': 'Molly Stark',
        'lives': '4',
        'ability': 'Each time she uses a card from her hand out of turn, she draws a card.'
    },
    'ms. abigail': {
        'name': 'Ms. Abigail',
        'lives': '4',
        'ability': 'You many ignore the effects of brown-bordered cards with values J,Q,K, and A if you are the only target.'
    },
    'paul regret': {
        'name': 'Paul Regret',
        'lives': '3',
        'ability': 'All players see him at a distance increased by 1.'
    },
    'pat brennan': {
        'name': 'Pat Brennan',
        'lives': '4',
        'ability': 'He may draw only one card in play in front of any one player.'
    },
    'pedro ramierez': {
        'name': 'Pedro Ramierez',
        'lives': '4',
        'ability': 'He many draw his first card from the discard pile.'
    },
    'pixie pete': {
        'name': 'Pixie Pete',
        'lives': '3',
        'ability': 'He draws 3 cards instead of 2.'
    },
    'red ringo': {
        'name': 'Red Ringo',
        'lives': '4',
        'ability': 'Start with 4 cubs. Once during your turn, you may move up to 2 cubes from here to your cards.'
    },
    'rose doolan': {
        'name': 'Rose Doolan',
        'lives': '4',
        'ability': 'She sees all players at a distance decrease by 1.'
    },
    'sean mallory': {
        'name': 'Sean Mallory',
        'lives': '3',
        'ability': 'He may hold in his hand up to 10 cards.'
    },
    'sid ketchum': {
        'name': 'Sid Ketchum',
        'lives': '4',
        'ability': 'He may discard 2 cards to regain 1 life point.'
    },
    'slab the killer': {
        'name': 'Slab the Killer',
        'lives': '4',
        'ability': 'Player needs 2 Missed cards! to cancel his BANG! card.'
    },
    'suzy lafayette': {
        'name': 'Suzy Lafayette',
        'lives': '4',
        'ability': 'As soon as she has no cards in hand, she draws a card.'
    },
    'tequila joe': {
        'name': 'Tequila Joe',
        'lives': '4',
        'ability': 'Each time he plays a Beer, he regains 2 life points instead of 1.'
    },
    'tuco franziskaner': {
        'name': 'Tuco Franziskaner',
        'lives': '4',
        'ability': 'During you draw phase, if you have no blue cards in play, draw 2 extra cards.'
    },
    'uncle will': {
        'name': 'Uncle Will',
        'lives': '4',
        'ability': 'Once during his turn, he may play any card from hand as a General Store.'
    },
    'vera custer': {
        'name': 'Vera Custer',
        'lives': '3',
        'ability': 'For one whole round, she gains the same ability of another character in play of her choice.'
    },
    'vulture sam': {
        'name': 'Vulture Sam',
        'lives': '4',
        'ability': 'Whenever a player is eliminated from play, he takes in hand all the cards of that player.'
    },
    'willy the kid': {
        'name': 'Willy The Kid',
        'lives': '4',
        'ability': 'He can play any number of BANG! cards.'
    },
    'unknown': {
        'name': 'unknown',
        'lives': 'unknown',
        'ability': 'unknown'
    },
}


app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const characterName = request.params.name.toLowerCase()
    if(characters[characterName]){
        response.json(characters[characterName])
    }else{
        response.json(characters['unknown'])
    }

})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}! you better go catch it!`)
})