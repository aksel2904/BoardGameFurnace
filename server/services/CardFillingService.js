const Card = require('../models/Card');

// заполняем коллекцию карточками
const fillingCardsCollection = async () => {
    try {
        const cards = [
            {
                name: 'First',
                type: 'enterprise',
                compensation: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["oil"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["upgrade"],
                    },
                    maxUses: 1
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["coin", 2]
                    },
                    maxUses: 4
                }
            },
            {
                name: 'Second',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["metal", "oil"],
                        to: ["coin", 7]
                    },
                    maxUses: 2
                }
            },
            {
                name: 'Third',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["oil"],
                        to: ["coin", 4]
                    },
                    maxUses: 1
                },
                secondSide: {
                    type: "production",
                    details: {
                        what: ["coal", "coal", "coal"]
                    },
                    maxUses: 0
                }
            },
            {
                name: 'Fourth',
                type: 'enterprise',
                compensation: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["oil"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["oil"],
                        to: ["coin", 4]
                    },
                    maxUses: 1
                },
                secondSide: {
                    type: "production",
                    details: {
                        what: ["metal", "coal", "coal"]
                    },
                    maxUses: 0
                }
            },
            {
                name: 'Fifth',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["metal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "production",
                    details: {
                        what: ["metal"]
                    },
                    maxUses: 0
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["oil"],
                        to: ["coin", 4]
                    },
                    maxUses: 2
                }
            },
            {
                name: 'Sixth',
                type: 'enterprise',
                compensation: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["oil"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                secondSide: {
                    type: "production",
                    details: {
                        what: ["oil"]
                    },
                    maxUses: 0
                }
            },
            {
                name: 'Seventh',
                type: 'enterprise',
                compensation: {
                    type: "exchange",
                    details: {
                        from: ["oil"],
                        to: ["metal", "metal", "metal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["coal", "coal"],
                        to: ["coin", 2]
                    },
                    maxUses: 2
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["coal"],
                        to: ["metal"]
                    },
                    maxUses: 4
                }
            },
            {
                name: 'Eighth',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["coin", 2]
                    },
                    maxUses: 2
                },
                secondSide: {
                    type: "production",
                    details: {
                        what: ["coal", "coal", "coal"]
                    },
                    maxUses: 0
                }
            },
            {
                name: 'Ninth',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["metal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "production",
                    details: {
                        what: ["metal"]
                    },
                    maxUses: 0
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["upgrade"],
                        to: ["coin", 5]
                    },
                    maxUses: 2
                }
            },
            {
                name: 'Tenth',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["metal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "production",
                    details: {
                        what: ["metal"]
                    },
                    maxUses: 0
                },
                secondSide: {
                    type: "production",
                    details: {
                        what: ["metal", "metal"]
                    },
                    maxUses: 0
                }
            },
            {
                name: 'Eleventh',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["metal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["upgrade"],
                        to: ["coin", 5]
                    },
                    maxUses: 1
                },
                secondSide: {
                    type: "production",
                    details: {
                        what: ["metal", "metal"]
                    },
                    maxUses: 0
                }
            },
            {
                name: 'Twelfth',
                type: 'enterprise',
                compensation: {
                    type: "exchange",
                    details: {
                        from: ["coal", "coal"],
                        to: ["oil"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["coal", "coal"],
                        to: ["coin", 2]
                    },
                    maxUses: 2
                },
                secondSide: {
                    type: "production",
                    details: {
                        what: ["metal", "metal"]
                    },
                    maxUses: 0
                }
            },
            {
                name: 'Thirteenth',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["oil"],
                        to: ["coin", 4]
                    },
                    maxUses: 2
                }
            },
            {
                name: 'Fourteenth',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["metal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["coal", "coal"],
                        to: ["coin", 2]
                    },
                    maxUses: 2
                },
                secondSide: {
                    type: "production",
                    details: {
                        what: ["oil"]
                    },
                    maxUses: 0
                }
            },
            {
                name: 'Fifteenth',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "production",
                    details: {
                        what: ["metal"]
                    },
                    maxUses: 0
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["coal", "oil"],
                        to: ["coin", 6]
                    },
                    maxUses: 2
                }
            },
            {
                name: 'Sixteenth',
                type: 'enterprise',
                compensation: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["upgrade"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["oil"],
                        to: ["coin", 4]
                    },
                    maxUses: 1
                },
                secondSide: {
                    type: "production",
                    details: {
                        what: ["coal", "coal", "coal"]
                    },
                    maxUses: 0
                }
            },
            {
                name: 'Seventeenth',
                type: 'enterprise',
                compensation: {
                    type: "exchange",
                    details: {
                        from: ["oil"],
                        to: ["metal", "metal", "metal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["coal", "coal"],
                        to: ["oil"],
                    },
                    maxUses: 2
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["coal", "metal"],
                        to: ["coin", 4]
                    },
                    maxUses: 3
                }
            },
            {
                name: 'Eighteenth',
                type: 'enterprise',
                compensation: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["upgrade"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["coin", 2]
                    },
                    maxUses: 4
                }
            },
            {
                name: 'Nineteenth',
                type: 'enterprise',
                compensation: {
                    type: "exchange",
                    details: {
                        from: ["coal", "coal"],
                        to: ["oil"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["coal", "coal"],
                        to: ["oil"]
                    },
                    maxUses: 2
                },
                secondSide: {
                    type: "production",
                    details: {
                        what: ["upgrade"]
                    },
                    maxUses: 0
                }
            },
            {
                name: 'Twentieth',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["metal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "production",
                    details: {
                        what: ["metal"]
                    },
                    maxUses: 0
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["coal", "oil"],
                        to: ["coin", 6]
                    },
                    maxUses: 2
                }
            },
            {
                name: 'TwentyFirst',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["upgrade"],
                        to: ["coin", 5]
                    },
                    maxUses: 2
                }
            },
            {
                name: 'TwentySecond',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["upgrade"],
                        to: ["coin", 5]
                    },
                    maxUses: 1
                },
                secondSide: {
                    type: "production",
                    details: {
                        what: ["coal", "coal", "coal"]
                    },
                    maxUses: 0
                }
            },
            {
                name: 'TwentyThird',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["metal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["oil"],
                        to: ["coin", 4]
                    },
                    maxUses: 2
                }
            },
            {
                name: 'TwentyFourth',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["metal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["oil"]
                    },
                    maxUses: 2
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["coal", "coal", "coal"],
                        to: ["coin", 4]
                    },
                    maxUses: 3
                }
            },
            {
                name: 'TwentyFifth',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "production",
                    details: {
                        what: ["metal"]
                    },
                    maxUses: 0
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["coal"],
                        to: ["metal"]
                    },
                    maxUses: 4
                }
            },
            {
                name: 'TwentySixth',
                type: 'enterprise',
                compensation: {
                    type: "exchange",
                    details: {
                        from: ["coal", "coal"],
                        to: ["oil"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["coal", "coal"],
                        to: ["coin", 2]
                    },
                    maxUses: 2
                },
                secondSide: {
                    type: "production",
                    details: {
                        what: ["oil"]
                    },
                    maxUses: 0
                }
            },
            {
                name: 'TwentySeventh',
                type: 'enterprise',
                compensation: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["upgrade"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["upgrade"]
                    },
                    maxUses: 1
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["coal", "coal", "coal"],
                        to: ["coin", 4]
                    },
                    maxUses: 3
                }
            },
            {
                name: 'TwentyEighth',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["coin", 2]
                    },
                    maxUses: 4
                }
            },
            {
                name: 'TwentyNinth',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "production",
                    details: {
                        what: ["metal"]
                    },
                    maxUses: 0
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["oil"],
                        to: ["coin", 4]
                    },
                    maxUses: 2
                }
            },
            {
                name: 'Thirtieth',
                type: 'enterprise',
                compensation: {
                    type: "exchange",
                    details: {
                        from: ["coal", "coal"],
                        to: ["oil"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["coal"],
                        to: ["oil"]
                    },
                    maxUses: 1
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["coal", "metal"],
                        to: ["coin", 4]
                    },
                    maxUses: 3
                }
            },
            {
                name: 'ThirtyFirst',
                type: 'enterprise',
                compensation: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["coal", "coal", "coal", "coal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["coal", "coal", "coal", "coal"]
                    },
                    maxUses: 1
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["upgrade"],
                        to: ["coin", 5]
                    },
                    maxUses: 2
                }
            },
            {
                name: 'ThirtySecond',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["metal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["upgrade"]
                    },
                    maxUses: 1
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["metal", "oil"],
                        to: ["coin", 7]
                    },
                    maxUses: 2
                }
            },
            {
                name: 'ThirtyThird',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                secondSide: {
                    type: "production",
                    details: {
                        what: ["coal", "coal", "coal"]
                    },
                    maxUses: 0
                }
            },
            {
                name: 'ThirtyFourth',
                type: 'enterprise',
                compensation: {
                    type: "production",
                    details: {
                        what: ["metal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"]
                    },
                    maxUses: 0
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["coin", 2]
                    },
                    maxUses: 4
                }
            },
            {
                name: 'ThirtyFifth',
                type: 'enterprise',
                compensation: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["oil"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["oil"]
                    },
                    maxUses: 2
                },
                secondSide: {
                    type: "production",
                    details: {
                        what: ["oil"]
                    },
                    maxUses: 0
                }
            },
            {
                name: 'ThirtySixth',
                type: 'enterprise',
                compensation: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["coal", "coal", "coal", "coal"]
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["coal", "coal", "coal", "coal"]
                    },
                    maxUses: 1
                },
                secondSide: {
                    type: "production",
                    details: {
                        what: ["upgrade"]
                    },
                    maxUses: 0
                }
            },
            {
                name: 'FirstStarting',
                type: 'starting',
                compensation: {
                    type: "production",
                    details: {
                        what: ["upgrade"],
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["coal", "metal"],
                        to: ["coin", 4]
                    },
                    maxUses: 1
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["upgrade", "coal"],
                        to: ["flip"]
                    },
                    maxUses: 20
                }
            },
            {
                name: 'SecondStarting',
                type: 'starting',
                compensation: {
                    type: "production",
                    details: {
                        what: ["coal", "metal"],
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["coal", "coal"],
                        to: ["coin", 2]
                    },
                    maxUses: 2
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["upgrade", "coal"],
                        to: ["flip"]
                    },
                    maxUses: 20
                }
            },
            {
                name: 'ThirdStarting',
                type: 'starting',
                compensation: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"],
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["metal"],
                        to: ["coin", 2]
                    },
                    maxUses: 2
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["upgrade", "coal"],
                        to: ["flip"]
                    },
                    maxUses: 20
                }
            },
            {
                name: 'FourthStarting',
                type: 'starting',
                compensation: {
                    type: "production",
                    details: {
                        what: ["coal", "coal"],
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["coal", "coal", "coal"],
                        to: ["coin", 4]
                    },
                    maxUses: 1
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["upgrade", "coal"],
                        to: ["flip"]
                    },
                    maxUses: 20
                }
            },
            {
                name: 'FifthStarting',
                type: 'starting',
                compensation: {
                    type: "production",
                    details: {
                        what: ["coal", "metal"],
                    },
                    maxUses: 0
                },
                firstSide: {
                    type: "exchange",
                    details: {
                        from: ["oil"],
                        to: ["coin", 4]
                    },
                    maxUses: 2
                },
                secondSide: {
                    type: "exchange",
                    details: {
                        from: ["upgrade", "coal"],
                        to: ["flip"]
                    },
                    maxUses: 20
                }
            }
        ];
        await Card.insertMany(cards);
        console.log("Card collection filled");
    } catch (error) {
        console.error("Error during filling cards collection", error);
    }
}

module.exports = { fillingCardsCollection };