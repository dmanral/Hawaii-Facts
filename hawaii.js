
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const hawaiiFacts = {
    'en-US': {
        translation: {
            FACTS: [
                    "Aloha in Hawaiian could mean both hello and goodbye, however, it could also mean welcome, love, and best wishes.",
                    "Hawaii's nick name is the Aloha State.",
                    "Hawaii is the only US state with a tropical forest.",
                    "Hawaii is the only US state made up entirely of islands. It is composed of 132 islands.",
                    "Hawaii is the second widest state in the US.",
                    "Hawaii is the only US state that grows coffee, cocoa, and vanilla beans.",
                    "The Big Island is getting bigger by 42 acres each year because of the continuous eruption of the Kilauea Volcano.",
                    "Kilauea Volcano in the Big Island has been erupting for 30 years.",
                    "The Hawaii is one of four US states that have outlawed billboards.",
                    "Haleakala (means 'House of the Sun') is the world's largest dormant volcano. It forms more than 75 percent of the Hawaiian Island of Maui. Its crater is 3,000 feet deep, 7.5 miles long by 2.5 miles wide.",
                    "The word Hawaii is from the Proto-Polynesian hawaiki, meaning 'place of the gods' or 'homeland'.",
                    "The state of Hawaii consists of eight main islands: Niihau, Kauai, Oahu, Maui, Molokai, Lanai, Kahoolawe and the Big Island of Hawaii.",
                    "More than one-third of the world's commercial supply of pineapples comes from Hawaii.",
                    "Hawaii was the 50th state admitted to the union on August 20th, 1959.",
                    "Hawaii has its own time zone, Hawaiian Standard Time. There is no daylight savings time. The time runs two hours behind Pacific Standard Time and five hours behind Eastern Standard Time.",
                    "At 800,000 years the Big Island is the youngest of the island chain. However, it was the first island discovered by voyaging Polynesians.",
                    "Hawaii is the only state that is not geographically located in North America, is completely surrounded by water, and does not have a straight line in its state boundary.",
                    "Born in Hawaii, Barack Obama is the only president from outside the continental United States.",
                    "Hawaii has two official languages, Hawaiian and English, though Pidgin, Samoan, and Tongan are also spoken.",
                    "In the 1960s, astronauts trained for moon voyages by walking on Mauna Loa's hardened lava fields, which resemble the surface of the moon.",
                    "Hawaii consists of 8 main islands, They are Hawaii, Maui, O'ahu, Kaua'i, Moloka'i, Lana'i, Ni'ihau, and Kaho'olawe.",
                    "The biggest island is Hawai'i and it is nicknamed The Big Island.",
                    "Surfing, or heenalu, was invented thousands of years ago by the Polynesians who first settled Hawaii. Their boards weighed more than 150 pounds and measured up to 20 feet.",
                    "Only two types of mammals are native to Hawaii: the hoary bat and the monk seal.",
                    "The hula was originally a form of worship performed by highly trained men who were supposedly taught the dance by the Hawaiian god Luka.",
                    "Ancient Hawaiians believed that the heavier a woman, especially a chieftess, the more beautiful she was.",
                    "The average projected lifespan of those born in Hawaii in the year 2000 is 79.8 years, longer than the residents of any other state.",
                    "The second rainiest place on Earth is Mt. Waialeale on the island of Kauai, where the average rainfall is 450 inches per year.",
                    "Hawaiians considered the shark (mano) a god and treated it with great respect.",
                    "Hawaii has lost more species and has more endangered species than any other state in the United States. Nearly all of the state's native birds are in danger of becoming extinct.",
                    "Park rangers at Hawaii National Park receive packages every year from tourists who have taken volcanic rocks from Kilauea. The tourists claim that the rocks were bad luck from Pele, the goddess of fire, lightening, dance, volcanoes, and violence.",
                    "Hawaii is 2,390 miles away from the nearest continent (North America) and is considered the most isolated population center on earth.",
                    "The pupular TV series Lost was shot in Hawaii. At the end of the credits is a note thanking the people of Hawaii and their Aloha Spirit."
            ],
            SKILL_NAME: 'Hawaii Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a Hawaii fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Aloha!',
        },
    },

};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = hawaiiFacts;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
