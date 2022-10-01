export const marcRecordTemplate = [
    {
        tab: 0,
        fields: [
            {
                name: 'LEADER',
                code:'000',
                subFields:[
                    {
                        id: 1,
                        code:'00',
                        name:'fixed length control field',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'CONTROL NUMBER',
                code:'001',
                subFields:[
                    {
                        id: 1,
                        code:'00',
                        name:'control field',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'CONTROL NUMBER IDENTIFIER',
                code:'003',
                subFields:[
                    {
                        id: 1,
                        code:'00',
                        name:'control field',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'DATE AND TIME OF LATEST TRANSACTION',
                code:'005',
                subFields:[
                    {
                        id: 1,
                        code:'00',
                        name:'control field',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: ' FIXED-LENGTH DATA ELEMENTS--ADDITIONAL MATERIAL CHARACTERISTICS',
                code:'006',
                subFields:[
                    {
                        id: 1,
                        code:'00',
                        name:'fixed length control field',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'PHYSICAL DESCRIPTION FIXED FIELD--GENERAL INFORMATION',
                code:'007',
                subFields:[
                    {
                        id: 1,
                        code:'00',
                        name:'fixed length control field',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'PHYSICAL DESCRIPTION FIXED FIELD--GENERAL INFORMATION',
                code:'008',
                subFields:[
                    {
                        id: 1,
                        code:'00',
                        name:'fixed length control field',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'LIBRARY OF CONGRESS CONTROL NUMBER',
                code:'010',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'LC control number',
                        value: "",
                    },{
                        id: 2,
                        code:'b',
                        name:'NUCMC control number',
                        value: "",
                    },{
                        id: 3,
                        code:'z',
                        name:'Canceled/invalid LC control number',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'NATIONAL BIBLIOGRAPHY NUMBER',
                code:'015',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'h',
                        name:'Qualifying information',
                        value: "",
                    },{
                        id: 2,
                        code:'2',
                        name:'Source',
                        value: "",
                    },{
                        id: 3,
                        code:'a',
                        name:'National bibliography number',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'NATIONAL BIBLIOGRAPHIC AGENCY CONTROL NUMBER',
                code:'016',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'z',
                        name:'Canceled/invalid record control number',
                        value: "",
                    },{
                        id: 2,
                        code:'2',
                        name:'Source',
                        value: "",
                    },{
                        id: 3,
                        code:'a',
                        name:'Record control number',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'INTERNATIONAL STANDARD BOOK NUMBER',
                code:'020',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'z',
                        name:'Canceled/invalid ISBN',
                        value: "",
                    },{
                        id: 2,
                        code:'c',
                        name:'Terms of availability',
                        value: "",
                    },{
                        id: 3,
                        code:'a',
                        name:'International Standard Book Number',
                        value: "",
                    },{
                        id: 4,
                        code:'q',
                        name:'Qualifying information',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'INTERNATIONAL STANDARD SERIAL NUMBER',
                code:'022',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'z',
                        name:'Source',
                        value: "",
                    },{
                        id: 2,
                        code:'c',
                        name:'International Standard Serial Number',
                        value: "",
                    },{
                        id: 3,
                        code:'a',
                        name:'Incorrect ISSN',
                        value: "",
                    },{
                        id: 4,
                        code:'q',
                        name:'Canceled ISSN',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'OTHER STANDARD IDENTIFIER',
                code:'024',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'z',
                        name:'Source of number or code',
                        value: "",
                    },{
                        id: 2,
                        code:'c',
                        name:'Standard number or code',
                        value: "",
                    },{
                        id: 3,
                        code:'a',
                        name:'Terms of availability',
                        value: "",
                    },{
                        id: 4,
                        code:'q',
                        name:'Additional codes following the standard number or code',
                        value: "",
                    },{
                        id: 5,
                        code:'d',
                        name:'Qualifying information',
                        value: "",
                    },{
                        id: 5,
                        code:'2',
                        name:'Canceled/invalid standard number or code',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: ' STANDARD TECHNICAL REPORT NUMBER',
                code:'027',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'z',
                        name:'Standard technical report number',
                        value: "",
                    },{
                        id: 2,
                        code:'c',
                        name:'Qualifying information',
                        value: "",
                    },{
                        id: 3,
                        code:'a',
                        name:'Canceled/invalid number',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'PUBLISHER NUMBER',
                code:'028',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'z',
                        name:'Publisher number',
                        value: "",
                    },{
                        id: 2,
                        code:'c',
                        name:'Source',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'SYSTEM CONTROL NUMBER',
                code:'035',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'z',
                        name:'System control number',
                        value: "",
                    },{
                        id: 2,
                        code:'c',
                        name:'Canceled/invalid control number',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'SOURCE OF ACQUISITION',
                code:'037',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'z',
                        name:'Stock number',
                        value: "",
                    },{
                        id: 2,
                        code:'c',
                        name:'Source of stock number/acquisition',
                        value: "",
                    },{
                        id: 3,
                        code:'a',
                        name:'Terms of availability',
                        value: "",
                    },{
                        id: 4,
                        code:'q',
                        name:'Form of issue',
                        value: "",
                    },{
                        id: 5,
                        code:'d',
                        name:'Additional format characteristics',
                        value: "",
                    },{
                        id: 5,
                        code:'2',
                        name:'Note',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'CATALOGING SOURCE',
                code:'040',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'z',
                        name:'Original cataloging agency',
                        value: "",
                    },{
                        id: 2,
                        code:'c',
                        name:'Language of cataloging',
                        value: "",
                    },{
                        id: 3,
                        code:'a',
                        name:'Transcribing agency',
                        value: "",
                    },{
                        id: 4,
                        code:'q',
                        name:'Modifying agency',
                        value: "",
                    },{
                        id: 5,
                        code:'d',
                        name:'Description conventions',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'LANGUAGE CODE',
                code:'041',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'z',
                        name:'Language code of text/sound track or separate title',
                        value: "",
                    },{
                        id: 2,
                        code:'c',
                        name:'Language code of sung or spoken text',
                        value: "",
                    },{
                        id: 3,
                        code:'a',
                        name:'Language code of librettos',
                        value: "",
                    },{
                        id: 4,
                        code:'q',
                        name:'Language code of accompanying material other than librettos',
                        value: "",
                    },{
                        id: 5,
                        code:'d',
                        name:'Language code of original',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'TIME PERIOD OF CONTENT',
                code:'045',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Time period code',
                        value: "",
                    },{
                        id: 2,
                        code:'b',
                        name:'Formatted 9999 B.C. through C.E. time period',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'FORM OF MUSICAL COMPOSITION CODE',
                code:'047',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Source of code',
                        value: "",
                    },{
                        id: 2,
                        code:'b',
                        name:'Form of musical composition code',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'NUMBER OF MUSICAL INSTRUMENTS OR VOICES CODE',
                code:'048',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'z',
                        name:'Source of code',
                        value: "",
                    },{
                        id: 2,
                        code:'c',
                        name:'Performer or ensemble',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Soloist',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'LIBRARY OF CONGRESS CALL NUMBER',
                code:'050',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Classification number',
                        value: "",
                    },{
                        id: 2,
                        code:'b',
                        name:'Item number',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'GPO ITEM NUMBER',
                code:'074',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'GPO item number',
                        value: "",
                    },{
                        id: 2,
                        code:'b',
                        name:'Canceled/invalid GPO item number',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'DEWEY DECIMAL CLASSIFICATION NUMBER',
                code:'082',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'z',
                        name:'Edition number',
                        value: "",
                    },{
                        id: 2,
                        code:'c',
                        name:'Classification number',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Item number',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'GOVERNMENT DOCUMENT CLASSIFICATION NUMBER',
                code:'086',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'z',
                        name:'Number source',
                        value: "",
                    },{
                        id: 2,
                        code:'c',
                        name:'Classification number',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Canceled/invalid classification number',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            }
        ]
    },{
        tab: 1,
        fields:[
            {
                name: 'MAIN ENTRY--PERSONAL NAME',
                code:'100',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'z',
                        name:'Relator code',
                        value: "",
                    },{
                        id: 2,
                        code:'c',
                        name:'9 (RLIN)',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Personal name',
                        value: "",
                    },{
                        id: 4,
                        code:'x',
                        name:'Numeration',
                        value: "",
                    },{
                        id: 5,
                        code:'h',
                        name:'Titles and words associated with a name',
                        value: "",
                    },{
                        id: 6,
                        code:'e',
                        name:'Dates associated with a name',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Relator term',
                        value: "",
                    },{
                        id: 8,
                        code:'9',
                        name:'Fuller form of name',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'MAIN ENTRY--CORPORATE NAME',
                code:'110',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'z',
                        name:'Relator code',
                        value: "",
                    },{
                        id: 2,
                        code:'c',
                        name:'9 (RLIN)',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Corporate name or jurisdiction name as entry element',
                        value: "",
                    },{
                        id: 4,
                        code:'x',
                        name:'Subordinate unit',
                        value: "",
                    },{
                        id: 5,
                        code:'h',
                        name:'Location of meeting',
                        value: "",
                    },{
                        id: 6,
                        code:'e',
                        name:'Date of meeting or treaty signing',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Relator term',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'MAIN ENTRY--MEETING NAME',
                code:'111',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'z',
                        name:'Relator code',
                        value: "",
                    },{
                        id: 2,
                        code:'c',
                        name:'9 (RLIN)',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Meeting name or jurisdiction name as entry element',
                        value: "",
                    },{
                        id: 4,
                        code:'x',
                        name:'Location of meeting',
                        value: "",
                    },{
                        id: 5,
                        code:'h',
                        name:'Date of meeting',
                        value: "",
                    },{
                        id: 6,
                        code:'e',
                        name:'Subordinate unit',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Relator term',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'MAIN ENTRY--UNIFORM TITLE',
                code:'130',
                indicators:['',''],
                subFields:[
                    {
                        id: 2,
                        code:'c',
                        name:'9 (RLIN)',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Uniform title',
                        value: "",
                    },{
                        id: 4,
                        code:'x',
                        name:'Language of a work',
                        value: "",
                    },{
                        id: 5,
                        code:'h',
                        name:'Key for music',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            }
        ]
    },{
        tab:2,
        fields:[
            {
                name: 'ABBREVIATED TITLE',
                code:'210',
                indicators:['',''],
                subFields:[
                    {
                        id: 2,
                        code:'c',
                        name:'Source',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Abbreviated title',
                        value: "",
                    },{
                        id: 4,
                        code:'x',
                        name:'Qualifying information',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'KEY TITLE',
                code:'222',
                indicators:['',''],
                subFields:[
                    {
                        id: 2,
                        code:'c',
                        name:'Key title',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Qualifying information',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'UNIFORM TITLE',
                code:'240',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Key for music',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'c',
                        name:'Uniform title',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Medium',
                        value: "",
                    },{
                        id: 4,
                        code:'x',
                        name:'Language of a work',
                        value: "",
                    },{
                        id: 5,
                        code:'y',
                        name:'Version',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'COLLECTIVE UNIFORM TITLE',
                code:'243',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Uniform title',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'c',
                        name:'Medium',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Language of a work',
                        value: "",
                    },{
                        id: 4,
                        code:'x',
                        name:'Version',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'TITLE STATEMENT',
                code:'245',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Title',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'c',
                        name:'Remainder of title',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Statement of responsibility, etc.',
                        value: "",
                    },{
                        id: 4,
                        code:'x',
                        name:'Medium',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'VARYING FORM OF TITLE',
                code:'246',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Title proper/short title',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'c',
                        name:'Remainder of title',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Medium',
                        value: "",
                    },{
                        id: 4,
                        code:'x',
                        name:'Display text',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'FORMER TITLE',
                code:'247',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Title',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'c',
                        name:'Remainder of title',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Medium',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'EDITION STATEMENT ',
                code:'250',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Edition statement',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'c',
                        name:'Remainder of edition statement',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'PUBLICATION, DISTRIBUTION, ETC. (IMPRINT)',
                code:'260',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Place of publication, distribution, etc',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'c',
                        name:'Name of publisher, distributor, etc.',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Date of publication, distribution, etc.',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'ADDRESS',
                code:'270',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Address',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'City',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'State or province',
                        value: "",
                    },{
                        id: 4,
                        code:'d',
                        name:'Country',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Postal code',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Terms preceding attention name',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Attention name',
                        value: "",
                    },{
                        id: 8,
                        code:'h',
                        name:'Attention position',
                        value: "",
                    },{
                        id: 9,
                        code:'i',
                        name:'Type of address',
                        value: "",
                    },{
                        id: 10,
                        code:'j',
                        name:'Specialized telephone number',
                        value: "",
                    },{
                        id: 11,
                        code:'k',
                        name:'Telephone number',
                        value: "",
                    },{
                        id: 12,
                        code:'l',
                        name:'Fax number',
                        value: "",
                    },{
                        id: 13,
                        code:'m',
                        name:'Electronic mail address',
                        value: "",
                    },{
                        id: 14,
                        code:'n',
                        name:'TDD or TTY number',
                        value: "",
                    },{
                        id: 15,
                        code:'p',
                        name:'Contact person',
                        value: "",
                    },{
                        id: 16,
                        code:'q',
                        name:'Title of contact person',
                        value: "",
                    },{
                        id: 17,
                        code:'r',
                        name:'Hours',
                        value: "",
                    },{
                        id: 18,
                        code:'z',
                        name:'Public note',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            }
        ]
    },{
        tab:3,
        fields:[
            {
                name: 'PHYSICAL DESCRIPTION',
                code:'300',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Extent',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Other physical details',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Dimensions',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Accompanying material',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Type of unit',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Size of unit',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'PLAYING TIME',
                code:'306',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Playing time',
                        value: "",
                    },
                    
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'CURRENT PUBLICATION FREQUENCY',
                code:'310',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Current publication frequency',
                        value: "",
                    },
                    
                ],
                frameworks:['Default Framework']

            },
            {
                name: 'DATES OF PUBLICATION AND/OR SEQUENTIAL DESIGNATION',
                code:'362',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Dates of publication and/or sequential designation',
                        value: "",
                    },
                    
                ],
                frameworks:['Default Framework']

            },{
                name: 'TRADE PRICE',
                code:'365',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Source of price type code',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Price type code',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Price amount',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Currency code',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Unit of pricing',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Price note',
                        value: "",
                    },{
                        id: 8,
                        code:'h',
                        name:'Price effective from',
                        value: "",
                    },{
                        id: 9,
                        code:'i',
                        name:'Price effective until',
                        value: "",
                    },{
                        id: 10,
                        code:'j',
                        name:'Tax rate 1',
                        value: "",
                    },{
                        id: 11,
                        code:'k',
                        name:'Tax rate 2',
                        value: "",
                    },{
                        id: 12,
                        code:'m',
                        name:'ISO country code',
                        value: "",
                    },{
                        id: 13,
                        code:'n',
                        name:'MARC country code',
                        value: "",
                    },{
                        id: 14,
                        code:'o',
                        name:'Identification of pricing entity',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'TRADE AVAILABILITY INFORMATION',
                code:'366',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Source of availability status code',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Publishers compressed title identification',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Detailed date of publication',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Availability status code',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Expected next availability date',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Note',
                        value: "",
                    },{
                        id: 8,
                        code:'h',
                        name:'Publisherss discount category',
                        value: "",
                    },{
                        id: 9,
                        code:'i',
                        name:'Date made out of print',
                        value: "",
                    },{
                        id: 10,
                        code:'j',
                        name:'ISO country code',
                        value: "",
                    },{
                        id: 11,
                        code:'k',
                        name:'MARC country code',
                        value: "",
                    },{
                        id: 12,
                        code:'m',
                        name:'Identification of agency',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            }
        ]
    },{
        tab:4,
        fields:[
            {
                name: 'SERIES STATEMENT/ADDED ENTRY--TITLE',
                code:'440',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'9 (RLIN)',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Title',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Number of part/section of a work',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Name of part/section of a work',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Volume/sequential designation',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'International Standard Serial Number',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'SERIES STATEMENT',
                code:'490',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Series statement',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Volume/sequential designation',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'International Standard Serial Number',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            }
        ]
    },{
        tab:5,
        fields:[
            {
                name: 'GENERAL NOTE',
                code:'500',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'General note',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'WITH NOTE',
                code:'501',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'With note',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'BIBLIOGRAPHY, ETC. NOTE',
                code:'504',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Bibliography, etc',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'FORMATTED CONTENTS NOTE',
                code:'505',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Formatted contents note',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Miscellaneous information',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Statement of responsibility',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Title',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Uniform Resource Identifier',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'CREATION/PRODUCTION CREDITS NOTE',
                code:'508',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Creation/production credits note',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'PARTICIPANT OR PERFORMER NOTE',
                code:'511',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Participant or performer note',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'DATE/TIME AND PLACE OF AN EVENT NOTE',
                code:'518',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Date/time and place of an event note',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'SUMMARY, ETC.',
                code:'520',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Summary, etc',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Expansion of summary note',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Uniform Resource Identifier',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'TARGET AUDIENCE NOTE',
                code:'521',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Target audience note',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Source',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'GEOGRAPHIC COVERAGE NOTE',
                code:'522',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Geographic coverage note',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'PREFERRED CITATION OF DESCRIBED MATERIALS NOTE',
                code:'524',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Preferred citation of described materials note',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'STUDY PROGRAM INFORMATION NOTE',
                code:'526',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Program name',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Interest level',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Reading level',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Title point value',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'ADDITIONAL PHYSICAL FORM AVAILABLE NOTE',
                code:'530',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Additional physical form available note',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Availability source',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Availability conditions',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Order number',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Uniform Resource Identifier',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'REPRODUCTION NOTE',
                code:'533',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Type of reproduction',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Place of reproduction',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Agency responsible for reproduction',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Date of reproduction',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Physical description of reproduction',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Series statement of reproduction',
                        value: "",
                    },{
                        id: 8,
                        code:'h',
                        name:'Dates and/or sequential designation of issues reproduced',
                        value: "",
                    },{
                        id: 9,
                        code:'i',
                        name:'Note about reproduction',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'SYSTEM DETAILS NOTE',
                code:'538',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'System details note',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Display text',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Uniform Resource Identifier',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'IMMEDIATE SOURCE OF ACQUISITION NOTE',
                code:'541',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Source of acquisition',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Address',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Method of acquisition',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Date of acquisition',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Accession number',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Owner',
                        value: "",
                    },{
                        id: 8,
                        code:'h',
                        name:'Purchase price',
                        value: "",
                    },{
                        id: 9,
                        code:'i',
                        name:'Extent',
                        value: "",
                    },{
                        id: 10,
                        code:'j',
                        name:'Type of unit',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'LANGUAGE NOTE',
                code:'546',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Language note',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Information code or alphabet',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'CUMULATIVE INDEX/FINDING AIDS NOTE',
                code:'555',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Cumulative index/finding aids note',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Availability source',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Degree of control',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Bibliographic reference',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Uniform Resource Identifier',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'INFORMATION ABOUT DOCUMENTATION NOTE',
                code:'556',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Information about documentation note',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'International Standard Book Number',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'COPY AND VERSION IDENTIFICATION NOTE',
                code:'562',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Identifying markings',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Copy identification',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Version identification',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Presentation format',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Number of copies',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'BINDING INFORMATION',
                code:'563',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Binding note',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Uniform Resource Identifier',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'ACTION NOTE',
                code:'583',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Action',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Action identification',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Time/date of action',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Action interval',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Contingency for action',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Note',
                        value: "",
                    },{
                        id: 8,
                        code:'h',
                        name:'Authorization',
                        value: "",
                    },{
                        id: 9,
                        code:'i',
                        name:'Jurisdiction',
                        value: "",
                    },{
                        id: 10,
                        code:'j',
                        name:'Method of action',
                        value: "",
                    },{
                        id: 11,
                        code:'k',
                        name:'Site of action',
                        value: "",
                    },{
                        id: 12,
                        code:'m',
                        name:'Action agent',
                        value: "",
                    },{
                        id: 13,
                        code:'n',
                        name:'Status',
                        value: "",
                    },{
                        id: 14,
                        code:'o',
                        name:'Extent',
                        value: "",
                    },{
                        id: 15,
                        code:'p',
                        name:'Type of unit',
                        value: "",
                    },{
                        id: 16,
                        code:'q',
                        name:'Uniform Resource Identifier',
                        value: "",
                    },{
                        id: 17,
                        code:'r',
                        name:'Public note',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'EXHIBITIONS NOTE',
                code:'585',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Materials specified',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Exhibitions note',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            },{
                name: 'AWARDS NOTE',
                code:'586',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Awards note',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            }
        ]
    },{
        tab:6,
        fields:[
            {
                name: 'SUBJECT ADDED ENTRY--PERSONAL NAME',
                code:'600',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Source of heading or term',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'9 (RLIN)',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Personal name',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Numeration',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Titles and other words associated with a name',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Dates associated with a name',
                        value: "",
                    },{
                        id: 8,
                        code:'h',
                        name:'Fuller form of name',
                        value: "",
                    },{
                        id: 9,
                        code:'i',
                        name:'Title of a work',
                        value: "",
                    },{
                        id: 10,
                        code:'j',
                        name:'Form subdivision',
                        value: "",
                    },{
                        id: 11,
                        code:'k',
                        name:'General subdivision',
                        value: "",
                    },{
                        id: 12,
                        code:'m',
                        name:'Chronological subdivision',
                        value: "",
                    },{
                        id: 13,
                        code:'n',
                        name:'Geographic subdivision',
                        value: "",
                    }
                ],
                frameworks:['Default Framework']

            }
        ]
    }
]