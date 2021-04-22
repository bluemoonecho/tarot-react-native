const cardsObject = [
    

    {   name: `The Fool`,
    cardImage: require(`../cards-folder/card1.png`),
    keywords: `Beginnings, innocence, spontaneity, a free spirit`,
    content: `The Fool indicates newness, a new journey. It can indicate purity, open-hearted energy and innocence. It is generally a good omen. But it is important to take time to be sure where you are going. Trusting yourself to take a step into the unknown is one thing, but doing so without any thought whatsoever may be a mistake.`
},
{   
    name: `The Fool Reversed`,
    cardImage: require(`../cards-folder/card2.png`),
    keywords: `Holding back, recklessness, risk-taking`,
    content: `Even when reversed, the Fool is an indicator of newness; as well as the purity and open-hearted energy of a child. However, the fool reversed can show that there is a need for a new beginning, but that there is some hesitancy about making it happen.`
},
{   name: `The Magician`,
    cardImage: require(`../cards-folder/card3.png`),
    keywords: `Manifestation, resourcefulness, power, inspired action`,
    content: `The Magician is about making higher and better use of all of one's power. Spiritual, emotional, and otherwise. It often signifies new beginnings and great expectations. The Magician is all about action. If you do nothing you'll get nothing. In other words if you don't try you won't get.`
},
{   name: `The Magician Reversed`,
    cardImage: require(`../cards-folder/card4.png`),
    keywords: `Manipulation, poor planning, untapped talents`,
    content: ` Even when reversed, the Magician is about making higher - and better - use of all of one's power. The reversal, however, can indicate that one is hesitant about making the necessary changes in order to use their power in a more spiritual and more effective manner.`
},
{   name: `The High Priestess`,
    cardImage: require(`../cards-folder/card5.png`),
    keywords: `Intuition, sacred knowledge, divine feminine, the subconscious mind`,
    content: ` The High Priestess is a very spiritual card - often with sexual overtones. It can mean that you are in a phase where you are going to be much more physically attractive to others.
She is tied to the moon, to femininity, and to inspiration.`
},
{   name: `The High Priestess Reversed`,
    cardImage: require(`../cards-folder/card6.png`),
    keywords: `Secrets, disconnected from intuition, withdrawal and silence`,
    content: `When this card is reversed, it can be somewhat difficult for you to see and/or to tap into the powerful, intuitive, and attractive energy that is flowing around you. The energy is there. Look for it. Allow yourself to feel it.`
},
{   name: `The Empress`,
    cardImage: require(`../cards-folder/card7.png`),
    keywords: `Femininity, beauty, nature, nurturing, abundance`,
    content: `The Empress is an archetype of feminine power; she is watery, hard to fathom, mysterious, fertile, and sexual. She augurs a need for us to be in touch with our feminine side, to listen to our intuition, and to give priority to our emotions and passions.`
},
{   name: `The Empress Reversed`,
    cardImage: require(`../cards-folder/card8.png`),
    keywords: `Creative block, dependence on others`,
    content: `Reversed, the Empress encourages you to make self-love and self-care a priority. Now is the time to bring your loving energy and focus to yourself. The Empress reversed can suggest that you are feeling a creative block, especially in ‘birthing’ a new idea or expressing yourself creatively. Rediscover your beauty, inside and out.`
},
{   name: `The Emperor`,
    cardImage: require(`../cards-folder/card9.png`),
    keywords: `Authority, establishment, structure, a father figure`,
    content: `The appearance of The Emperor shows us that domination of the mind over the heart is sometimes necessary even though it is not wanted. In fact he should be welcomed and that is what you must think about when he appears.When hard choices must be made it's important to maintain your concentration and focus. The Emperor signals this but he also signals that now is a time you should find it easier to make hard choices.`
},
{   name: `The Emperor Reversed`,
    cardImage: require(`../cards-folder/card10.png`),
    keywords: `Domination, excessive control, lack of discipline, inflexibility`,
    content: `The Emperor in reverse can tell us that we are giving our heart more credence than what our mind and logic is telling us. In general that is not a bad thing; but ideally we would be balancing both. Use your mind AND your heart. You may be easily distracted now and could find it hard to maintain your concentration and focus. Yet drawing the reversed emperor indicates that concentration and focus is vital now.`
},
{   name: `The Hierophant`,
    cardImage: require(`../cards-folder/card11.png`),
    keywords: `Spiritual wisdom, religious beliefs, conformity, tradition, institutions`,
    content: `The Hierophant is very much about "doing the right thing." You may be struggling with an issue and are unsure about what is "right" for you to do. Know that the answers are within you. Remember that the "right" thing is what is right for you also.`
},
{   name: `The Hierophant Reversed`,
    cardImage: require(`../cards-folder/card12.png`),
    keywords: `Personal beliefs, freedom, challenging the status quo`,
    content: `The Hierophant Reversed tell us there is a more-than-normal level of confusion about what exactly the right thing is. The answers are within you… if, that is, you have enough information about the situations at hand. In this reversal suggests that you may need to dig a little deeper to find out “what’s what.” Remember that the "right" thing is what is right for you also.`
},
{   name: `The Lovers`,
    cardImage: require(`../cards-folder/card13.png`),
    keywords: `Love, harmony, relationships, values alignment, choices`,
    content: `The Lovers is associated with the astrological sign of Gemini, "The Twins." It almost always points to partnerships with just one other person; generally, and not surprisingly, this indicates a romantic partnership, but of course this is not always the case. Less frequently, it points to the duality that all of us have inwardly - between male/female, yin/yang, approach/avoidance, and the like.`
},
{   name: `The Lovers Reversed`,
    cardImage: require(`../cards-folder/card14.png`),
    keywords: `Self-love, disharmony, imbalance, misalignment of values`,
    content: `When this card appears in reverse, it’s very likely that you are feeling ambivalent about a relationship or situation in your life. You must pay attention to what your gut is telling you and to try to analyse and get clear about what this is and why. Your feelings and emotions are there for a reason. Don’t ignore them.`
},
{   name: `The Chariot`,
    cardImage: require(`../cards-folder/card15.png`),
    keywords: `Control, willpower, success, action, determination`,
    content: `The Chariot indicates a lot of energy but not free-for-all energy. It's directed, controlled, and has a goal in mind. When this card appears you are likely to be fairly clear on what your hopes and dreams involve and what you are willing to do to make them come true.`
},
{   name: `The Chariot Reversed`,
    cardImage: require(`../cards-folder/card16.png`),
    keywords: `Self-discipline, opposition, lack of direction`,
    content: `In reversal, the Chariot is still a card about movement. This movement can be literal from one physical place to another or metaphysical - a change in where you or someone close to you needs a change in their heart and/or mind.`
},
{   name: `Strength`,
    cardImage: require(`../cards-folder/card17.png`),
    keywords: `Strength, courage, persuasion, influence, compassion`,
    content: `Strength indicates the importance of mind over matter, and reminds you to focus on what you do want rather than what you don't want in your life. Its main point is that you have the ability to harness your thoughts and to use them for your - and everyone else's - highest good. Not only do you have the ability; you have the responsibility. So conquer your fears, control your impulses, and never lose patience with yourself or what you are doing.`
},
{   name: `Strength Reversed`,
    cardImage: require(`../cards-folder/card18.png`),
    keywords: `Inner strength, self-doubt, low energy, raw emotion`,
    content: `When Strength appears in reverse it does not indicate that you are not strong; on the contrary, it indicates typically that there is more strength in you and in your immediate situation than you are likely to be seeing at this time. If you’re having trouble “feeling” where the strong points are at the moment, get with a trusted and honest friend and make a list.`
},
{   name: `The Hermit`,
    cardImage: require(`../cards-folder/card19.png`),
    keywords: `Soul-searching, introspection, being alone, inner guidance`,
    content: `This card may signal that you need some time alone - don't be afraid to take it. Even if it's just a five minute walk around the house so that you can clear your head. This is also very much a card about "trying very hard to do the right thing." Just make sure that "doing the right thing" includes doing what is right for you personally, and not just worrying about the wants and needs of others.`
},
{   name: `The Hermit Reversed`,
    cardImage: require(`../cards-folder/card20.png`),
    keywords: `Isolation, loneliness, withdrawal`,
    content: `There is nothing wrong with having a need for some time alone - don't be afraid to take it. Problems can arise, however, when one spends too much time alone or is too fearful of being around other people or being vulnerable to them. Life is about vulnerability.`
},
{   name: `The Wheel of Fortune`,
    cardImage: require(`../cards-folder/card21.png`),
    keywords: `Good luck, karma, life cycles, destiny, a turning point`,
    content: ` The Wheel of Fortune tells you that in general, it looks as though things are changing. In most cases, this indicates positive, needed changes but for some people, change itself is very difficult and can almost be traumatic. This is a very spiritual and karmically oriented time. Change is part of the cyclical nature of life.`
},
{   name: `The Wheel of Fortune Reversed`,
    cardImage: require(`../cards-folder/card22.png`),
    keywords: `Bad luck, resistance to change, breaking cycles`,
    content: `When reversed, the changes which the Wheel of Fortune point may not be as obvious or marked as in its upright version, still, change is coming. This card always reminds us that "this too shall pass." Whether that's good times or bad times, it passes. This is an important time to think positively and to expect the best. Do not assume that any change cropping up now is permanent.`
},
{   name: `Justice`,
    cardImage: require(`../cards-folder/card23.png`),
    keywords: `Justice, fairness, truth, cause and effect, law`,
    content: `This card evokes the need for fairness, balance, and harmony. Operate in as balanced and reasonable a fashion as you can. Balance is necessary in order to thrive. This includes in how you think about and treat yourself. If you are directly involved with a court case, it is likely to be resolved, at least in large degree, in your favor.`
},
{   name: `Justice Reversed`,
    cardImage: require(`../cards-folder/card24.png`),
    keywords: `Unfairness, lack of accountability, dishonesty`,
    content: `In reverse, this card can mean that you are feeling currently as though something happening in your life is particularly unjust. You may well be correct. However, there may not be a great deal that you can do about it, and if there is not, it will be important to accept reality and not chafe too much.`
},
{   name: `The Hanged Man`,
    cardImage: require(`../cards-folder/card25.png`),
    keywords: `Pause, surrender, letting go, new perspectives`,
    content: `The Hanged Man generally shows that you are at a crossroads - one with only two options i.e. in or out, up or down, yes or no. You may find yourself very much wanting to do "something" but having no idea what it is or how to do it. If that happens, that's a clear sign that you should stop, relax, and look at ways that you might need to let go of attempts to control life/situations/people/things.`
},
{   name: `The Hanged Man Reversed`,
    cardImage: require(`../cards-folder/card26.png`),
    keywords: `Delays, resistance, stalling, indecision`,
    content: `Including when it comes up in reversal, The Hanged Man generally shows a life or situation at a crossroads - one with only two options e.g. in or out, up or down, yes or no. This is not a time to attempt to control people, outcomes or situations, it is a time to look critically at yourself and your options, and to be deliberate in your progress. If you don’t know what to do, at all, it’s often a clear signal to do nothing`
},
{   name: `Death`,
    cardImage: require(`../cards-folder/card27.png`),
    keywords: `Endings, change, transformation, transition`,
    content: `Death does not means physical death. This card simply indicates transformation and change. This is definitely a time of deep transformation, likely to be both internally and externally in your life. Situations, things, and people that you have counted on or gotten used to may no longer be available to you in quite the same way as they once were. This transition can be very difficult for some people. The change though, is nearly always needed.`
},
{   name: `Death Reversed`,
    cardImage: require(`../cards-folder/card28.png`),
    keywords: `Resistance to change, personal transformation, inner purging`,
    content: `When Death appears in reverse, it often indicates that the changes that are likely to be coming in the querent’s life are of a less intense nature than the changes indicated by the upright card. Again, it bears repeating that the energy of this time is not just change or destruction; it is change or destruction followed by renewal. Almost without exception in life, when one door may closes, another is opening. Will you have the courage to step through?`
},
{   name: `Temperance`,
    cardImage: require(`../cards-folder/card29.png`),
    keywords: `Balance, moderation, patience, purpose`,
    content: `Temperance is a card about balance, in many ways, and relationships of all kinds. Friendships, family, romantic partnerships, and work partnerships all need your attention. This is also a card about alchemy or mixing and matching. You may have to try several approaches to things before you find what is truly right for you.`
},
{   name: `Temperance Reversed`,
    cardImage: require(`../cards-folder/card30.png`),
    keywords: `Imbalance, excess, self-healing, re-alignment`,
    content: ` When the temperance Reversed appears, we are encouraged to experiment in various areas in our lives. You may have to try several approaches to things before you find what is truly right for you. The idea now is to do what it takes to find balance - in yourself, in your relationships, and with your goals and aspirations. If you need help to do this, ask for it!`
},
{   name: `The Devil`,
    cardImage: require(`../cards-folder/card31.png`),
    keywords: ` Shadow self, attachment, addiction, restriction, sexuality`,
    content: `The Devil is not as frightening a card to interpret as the depiction on most cards indicates. It is a card about bondage but often this bondage is metaphoric and internal. With this card  you are called to look beyond superficial appearances and to go deeper into the truth and meaning of a situation. You also are asked to remember that  when you're feeling restrained you nearly always hold the keys to your own freedom. Don't give up hope!`
},
{   name: `The Devil Reversed`,
    cardImage: require(`../cards-folder/card32.png`),
    keywords: `Releasing limiting beliefs, exploring dark thoughts, detachment`,
    content: `Especially reversed, the Devil is not as frightening a card to interpret as the depiction on most cards might seem to indicate. When reversed, the card reminds us that any situation that may seem to be trapping us is an illusion; we always have options, help is always available.s`
},
{   name: `The Tower`,
    cardImage: require(`../cards-folder/card33.png`),
    keywords: ` Sudden change, upheaval, chaos, revelation, awakening`,
    content: `The Tower is a card about change. Just as with the Devil and Death, the Tower is not as frightening or as ominous as the pictorial representation in most decks. Trying to hold too tightly to the status quo can be disastrous now.  Roll with the changes.`
},
{   name: `The Tower Reversed`,
    cardImage: require(`../cards-folder/card34.png`),
    keywords: `Personal transformation, fear of change, averting disaster`,
    content: `When the Tower shows in reverse, it is unfortunately still a possibility that some people/situations that you have counted on as being “there for you” may no longer be there in quite the same way. This is a time to roll with the changes. Holding on to tightly to things or people could well create serious difficulties for you and for your loved ones.`
},
{   name: `The Star`,
    cardImage: require(`../cards-folder/card35.png`),
    keywords: `Hope, faith, purpose, renewal, spirituality`,
    content: `The Tower is a card about change. Just as with the Devil and Death, the Tower is not as frightening or as ominous as the pictorial representation in most decks. Trying to hold too tightly to the status quo can be disastrous now.  Roll with the changes.`
},
{   name: `The Star Reversed`,
    cardImage: require(`../cards-folder/card36.png`),
    keywords: `Lack of faith, despair, self-trust, disconnection`,
    content: `Look hard at what you are feeling and discern whether, if you looked a little deeper, you could find reasons to be more optimistic and helpful. When this card appears in reverse, often we are tending to look on the darker side. Lift up your eyes! If you are drawing breath, there is always something you can be thankful for.`
},
{   name: `The Moon`,
    cardImage: require(`../cards-folder/card37.png`),
    keywords: ` Illusion, fear, anxiety, subconscious, intuition`,
    content: `The Moon indicates that things may seem somewhat confusing to you now. You may find it hard to understand where you are coming from, much less what others are thinking and feeling! You need to try to sit with the uncertainty, don't try to force things or people to do things before they are ready. This card is the "Pisces" of the tarot deck.`
},
{   name: `The Moon Reversed`,
    cardImage: require(`../cards-folder/card38.png`),
    keywords: `Release of fear, repressed emotion, inner confusion`,
    content: `Especially in reverse, The Moon indicates that things may seem somewhat confusing to you now and/or to those close to you. It’s important to “sit” with the uncertainty, don’t try to force things or people to do things before they are ready. This card is the “Pisces” of the tarot deck.`
},
{   name: `The Sun`,
    cardImage: require(`../cards-folder/card39.png`),
    keywords: `Positivity, fun, warmth, success, vitality`,
    content: `When the Sun card shows for you, it's a sign that soon you are likely to find yourself feeling more free than you have in a while - maybe years. This is a great time to take a vacation and to experience different things. The Sun is about vitality, freedom, joy, and self-expression.`
},
{   name: `The Sun Reversed`,
    cardImage: require(`../cards-folder/card40.png`),
    keywords: `Inner child, feeling down, overly optimistic`,
    content: `When the Sun card shows for you, even when reversed, it’s still a sign that soon you are likely to find yourself feeling more “free” than you have in a while - maybe years. However, in reverse, there is much less clarity to this “freedom,” and you may have to work harder to bring the “freedom,” about. Still, this is an excellent and important time to experience different things, things which are out of your usual routines.`
},
{   name: `Judgement`,
    cardImage: require(`../cards-folder/card41.png`),
    keywords: `Judgement, rebirth, inner calling, absolution`,
    content: `Judgment can be a card about jumping to conclusions, decisions and of course, judgments, which are too hastily made. If you are prone to such things, this is a clear signal to slow down and give things more thought and to give people "more chances." This can also be a time of fundamental spiritual awakening.  `
},
{   name: `Judgement Reversed`,
    cardImage: require(`../cards-folder/card42.png`),
    keywords: `Self-doubt, inner critic, ignoring the call`,
    content: ` In general, Judgment reversed tells you to look carefully at how you are making decisions and judgments. If you are the one tending to “jump to conclusions,” you can, and should, change this.`
},
{   name: `The World`,
    cardImage: require(`../cards-folder/card43.png`),
    keywords: `Completion, integration, accomplishment, travel`,
    content: `This can often be a card of completion. You've worked hard, and you are almost to the finish line in some way so don't quit now when you are so close! You're almost definitely in need of some well-deserved rest and relaxation; don't be afraid to take it. You are getting closer to who you really are at your deepest levels.
`
},
{   name: `The World Reversed`,
    cardImage: require(`../cards-folder/card44.png`),
    keywords: `Seeking personal closure, short-cuts, delays`,
    content: ` Whether upright or reversed, this can often be a card of completion. You've worked hard, and you are almost to the “finish line” in some way. Don’t quit now that you’re almost finished! You’re almost definitely in need of some well deserved rest and relaxation; don’t be afraid to take it. You are getting closer to “who you really are,” at your deepest levels. If you aren't seeing this progress when the world appears in reverse, take stock. What is standing in your way? Where are you stuck?`
},


];

export default cardsObject;