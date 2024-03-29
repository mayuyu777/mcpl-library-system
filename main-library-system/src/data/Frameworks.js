const date = new Date();
const dateYMD = date.getFullYear() +""+(date.getMonth()+1)+""+date.getDate();
const dateNow = dateYMD +""+date.getHours()+""+date.getMinutes()+''+date.getSeconds()+'.0';


export const marcRecordTemplate = [
    {
        tab: 0,
        fields: [
            {
                id: 0,
                name: 'LEADER',
                code:'000',
                subFields:[
                    {
                        id: 1,
                        code:'00',
                        name:'fixed length control field',
                        value: " nam a22     7a 4500",
                        disable:true,
                        isRequired: true,
                    }
                ],
                isRequired: true,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },
            {
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework']

            },
            {
                id: 0,
                name: 'CONTROL NUMBER IDENTIFIER',
                code:'003',
                subFields:[
                    {
                        id: 1,
                        code:'00',
                        name:'control field',
                        value: "OSt",
                        disable: true,
                        isRequired: true,
                    }
                ],
                isRequired: true,
                frameworks:['Default Framework']

            },
            {
                id: 0,
                name: 'DATE AND TIME OF LATEST TRANSACTION',
                code:'005',
                subFields:[
                    {
                        id: 1,
                        code:'00',
                        name:'control field',
                        value: dateNow,
                        disable: true,
                        isRequired: true,
                    }
                ],
                isRequired: true,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },
            {
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },
            {
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },
            {
                id: 0,
                name: 'FIXED-LENGTH DATA ELEMENTS--GENERAL INFORMATION',
                code:'008',
                subFields:[
                    {
                        id: 1,
                        code:'00',
                        name:'fixed length control field',
                        disable: true,
                        value: dateYMD + 'b        xxu||||| |||| 00| 0 eng d',
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },
            {
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework']

            },
            {
                id: 0,
                name: 'NATIONAL BIBLIOGRAPHY NUMBER',
                code:'015',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'q',
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
                isRequired: false,
                frameworks:['Default Framework']

            },
            {
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework']

            },
            {
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','CD/DVD General']

            },
            {
                id: 0,
                name: 'INTERNATIONAL STANDARD SERIAL NUMBER',
                code:'022',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'2',
                        name:'Source',
                        value: "",
                    },{
                        id: 2,
                        code:'a',
                        name:'International Standard Serial Number',
                        value: "",
                    },{
                        id: 3,
                        code:'y',
                        name:'Incorrect ISSN',
                        value: "",
                    },{
                        id: 4,
                        code:'z',
                        name:'Canceled ISSN',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Serials','CD/DVD General']

            },
            {
                id: 0,
                name: 'OTHER STANDARD IDENTIFIER',
                code:'024',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'2',
                        name:'Source of number or code',
                        value: "",
                    },{
                        id: 2,
                        code:'a',
                        name:'Standard number or code',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Terms of availability',
                        value: "",
                    },{
                        id: 4,
                        code:'d',
                        name:'Additional codes following the standard number or code',
                        value: "",
                    },{
                        id: 5,
                        code:'q',
                        name:'Qualifying information',
                        value: "",
                    },{
                        id: 5,
                        code:'z',
                        name:'Canceled/invalid standard number or code',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },
            {
                id: 0,
                name: ' STANDARD TECHNICAL REPORT NUMBER',
                code:'027',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Standard technical report number',
                        value: "",
                    },{
                        id: 2,
                        code:'q',
                        name:'Qualifying information',
                        value: "",
                    },{
                        id: 3,
                        code:'z',
                        name:'Canceled/invalid number',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework']

            },
            {
                id: 0,
                name: 'PUBLISHER NUMBER',
                code:'028',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Publisher number',
                        value: "",
                    },{
                        id: 2,
                        code:'b',
                        name:'Source',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','CD/DVD General']

            },
            {
                id: 0,
                name: 'SYSTEM CONTROL NUMBER',
                code:'035',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'System control number',
                        value: "",
                    },{
                        id: 2,
                        code:'z',
                        name:'Canceled/invalid control number',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework']

            },
            {
                id: 0,
                name: 'SOURCE OF ACQUISITION',
                code:'037',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Stock number',
                        value: "",
                    },{
                        id: 2,
                        code:'b',
                        name:'Source of stock number/acquisition',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Terms of availability',
                        value: "",
                    },{
                        id: 4,
                        code:'f',
                        name:'Form of issue',
                        value: "",
                    },{
                        id: 5,
                        code:'g',
                        name:'Additional format characteristics',
                        value: "",
                    },{
                        id: 5,
                        code:'n',
                        name:'Note',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },
            {
                id: 0,
                name: 'CATALOGING SOURCE',
                code:'040',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Original cataloging agency',
                        value: "",
                        isRequired: false
                    },{
                        id: 2,
                        code:'b',
                        name:'Language of cataloging',
                        value: "",
                        isRequired: false
                    },{
                        id: 3,
                        code:'c',
                        name:'Transcribing agency',
                        value: "",
                        isRequired: true
                    },{
                        id: 4,
                        code:'d',
                        name:'Modifying agency',
                        value: "",
                        isRequired: false
                    },{
                        id: 5,
                        code:'e',
                        name:'Description conventions',
                        value: "",
                        isRequired: false
                    }
                ],
                isRequired: true,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },
            {
                id: 0,
                name: 'LANGUAGE CODE',
                code:'041',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Language code of text/sound track or separate title',
                        value: "",
                    },{
                        id: 2,
                        code:'d',
                        name:'Language code of sung or spoken text',
                        value: "",
                    },{
                        id: 3,
                        code:'e',
                        name:'Language code of librettos',
                        value: "",
                    },{
                        id: 4,
                        code:'g',
                        name:'Language code of accompanying material other than librettos',
                        value: "",
                    },{
                        id: 5,
                        code:'h',
                        name:'Language code of original',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },
            {
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework']

            },
            {
                id: 0,
                name: 'FORM OF MUSICAL COMPOSITION CODE',
                code:'047',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'2',
                        name:'Source of code',
                        value: "",
                    },{
                        id: 2,
                        code:'a',
                        name:'Form of musical composition code',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework']

            },
            {
                id: 0,
                name: 'NUMBER OF MUSICAL INSTRUMENTS OR VOICES CODE',
                code:'048',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'2',
                        name:'Source of code',
                        value: "",
                    },{
                        id: 2,
                        code:'a',
                        name:'Performer or ensemble',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Soloist',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework']

            },
            {
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },
            {
                id: 0,
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
                        code:'z',
                        name:'Canceled/invalid GPO item number',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },
            {
                id: 0,
                name: 'DEWEY DECIMAL CLASSIFICATION NUMBER',
                code:'082',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'2',
                        name:'Edition number',
                        value: "",
                    },{
                        id: 2,
                        code:'a',
                        name:'Classification number',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Item number',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },
            {
                id: 0,
                name: 'GOVERNMENT DOCUMENT CLASSIFICATION NUMBER',
                code:'086',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'2',
                        name:'Number source',
                        value: "",
                    },{
                        id: 2,
                        code:'a',
                        name:'Classification number',
                        value: "",
                    },{
                        id: 3,
                        code:'z',
                        name:'Canceled/invalid classification number',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            }
        ]
    },{
        tab: 1,
        fields:[
            {
                id: 0,
                name: 'MAIN ENTRY--PERSONAL NAME',
                code:'100',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'4',
                        name:'Relator code',
                        value: "",
                    },{
                        id: 2,
                        code:'9',
                        name:'9 (RLIN)',
                        value: "",
                    },{
                        id: 3,
                        code:'a',
                        name:'Personal name',
                        value: "",
                    },{
                        id: 4,
                        code:'b',
                        name:'Numeration',
                        value: "",
                    },{
                        id: 5,
                        code:'c',
                        name:'Titles and words associated with a name',
                        value: "",
                    },{
                        id: 6,
                        code:'d',
                        name:'Dates associated with a name',
                        value: "",
                    },{
                        id: 7,
                        code:'e',
                        name:'Relator term',
                        value: "",
                    },{
                        id: 8,
                        code:'q',
                        name:'Fuller form of name',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'MAIN ENTRY--CORPORATE NAME',
                code:'110',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'4',
                        name:'Relator code',
                        value: "",
                    },{
                        id: 2,
                        code:'9',
                        name:'9 (RLIN)',
                        value: "",
                    },{
                        id: 3,
                        code:'a',
                        name:'Corporate name or jurisdiction name as entry element',
                        value: "",
                    },{
                        id: 4,
                        code:'b',
                        name:'Subordinate unit',
                        value: "",
                    },{
                        id: 5,
                        code:'c',
                        name:'Location of meeting',
                        value: "",
                    },{
                        id: 6,
                        code:'d',
                        name:'Date of meeting or treaty signing',
                        value: "",
                    },{
                        id: 7,
                        code:'e',
                        name:'Relator term',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'MAIN ENTRY--MEETING NAME',
                code:'111',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'4',
                        name:'Relator code',
                        value: "",
                    },{
                        id: 2,
                        code:'9',
                        name:'9 (RLIN)',
                        value: "",
                    },{
                        id: 3,
                        code:'a',
                        name:'Meeting name or jurisdiction name as entry element',
                        value: "",
                    },{
                        id: 4,
                        code:'c',
                        name:'Location of meeting',
                        value: "",
                    },{
                        id: 5,
                        code:'d',
                        name:'Date of meeting',
                        value: "",
                    },{
                        id: 6,
                        code:'e',
                        name:'Subordinate unit',
                        value: "",
                    },{
                        id: 7,
                        code:'j',
                        name:'Relator term',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'MAIN ENTRY--UNIFORM TITLE',
                code:'130',
                indicators:['',''],
                subFields:[
                    {
                        id: 2,
                        code:'9',
                        name:'9 (RLIN)',
                        value: "",
                    },{
                        id: 3,
                        code:'a',
                        name:'Uniform title',
                        value: "",
                    },{
                        id: 4,
                        code:'l',
                        name:'Language of a work',
                        value: "",
                    },{
                        id: 5,
                        code:'r',
                        name:'Key for music',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            }
        ]
    },{
        tab:2,
        fields:[
            {
                id: 0,
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
                        code:'a',
                        name:'Abbreviated title',
                        value: "",
                    },{
                        id: 4,
                        code:'b',
                        name:'Qualifying information',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'KEY TITLE',
                code:'222',
                indicators:['',''],
                subFields:[
                    {
                        id: 2,
                        code:'a',
                        name:'Key title',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Qualifying information',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'UNIFORM TITLE',
                code:'240',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'r',
                        name:'Key for music',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'a',
                        name:'Uniform title',
                        value: "",
                    },{
                        id: 3,
                        code:'h',
                        name:'Medium',
                        value: "",
                    },{
                        id: 4,
                        code:'l',
                        name:'Language of a work',
                        value: "",
                    },{
                        id: 5,
                        code:'s',
                        name:'Version',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
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
                        code:'h',
                        name:'Medium',
                        value: "",
                    },{
                        id: 3,
                        code:'l',
                        name:'Language of a work',
                        value: "",
                    },{
                        id: 4,
                        code:'s',
                        name:'Version',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'TITLE STATEMENT',
                code:'245',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Title',
                        value: "",
                        isRequired: true
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Remainder of title',
                        value: "",
                        isRequired: false
                    },{
                        id: 3,
                        code:'c',
                        name:'Statement of responsibility, etc.',
                        value: "",
                        isRequired: true
                    },{
                        id: 4,
                        code:'h',
                        name:'Medium',
                        value: "",
                        isRequired: false
                    }
                ],
                isRequired: true,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
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
                        code:'b',
                        name:'Remainder of title',
                        value: "",
                    },{
                        id: 3,
                        code:'h',
                        name:'Medium',
                        value: "",
                    },{
                        id: 4,
                        code:'i',
                        name:'Display text',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
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
                        code:'b',
                        name:'Remainder of title',
                        value: "",
                    },{
                        id: 3,
                        code:'h',
                        name:'Medium',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Serials','CD/DVD General']

            },{
                id: 0,
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
                        code:'b',
                        name:'Remainder of edition statement',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
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
                        code:'b',
                        name:'Name of publisher, distributor, etc.',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Date of publication, distribution, etc.',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            }
        ]
    },{
        tab:3,
        fields:[
            {
                id: 0,
                name: 'PHYSICAL DESCRIPTION',
                code:'300',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Extent',
                        value: "",
                        isRequired: false
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Other physical details',
                        value: "",
                        isRequired: false
                    },{
                        id: 3,
                        code:'c',
                        name:'Dimensions',
                        value: "",
                        isRequired: true
                    },{
                        id: 5,
                        code:'e',
                        name:'Accompanying material',
                        value: "",
                        isRequired: false
                    },{
                        id: 6,
                        code:'f',
                        name:'Type of unit',
                        value: "",
                        isRequired: false
                    },{
                        id: 7,
                        code:'g',
                        name:'Size of unit',
                        value: "",
                        isRequired: false
                    }
                ],
                isRequired: true,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },
            {
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework']

            },
            {
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework','Serials','CD/DVD General']

            },
            {
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'TRADE PRICE',
                code:'365',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'2',
                        name:'Source of price type code',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'a',
                        name:'Price type code',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Price amount',
                        value: "",
                    },{
                        id: 5,
                        code:'c',
                        name:'Currency code',
                        value: "",
                    },{
                        id: 6,
                        code:'d',
                        name:'Unit of pricing',
                        value: "",
                    },{
                        id: 7,
                        code:'e',
                        name:'Price note',
                        value: "",
                    },{
                        id: 8,
                        code:'f',
                        name:'Price effective from',
                        value: "",
                    },{
                        id: 9,
                        code:'g',
                        name:'Price effective until',
                        value: "",
                    },{
                        id: 10,
                        code:'h',
                        name:'Tax rate 1',
                        value: "",
                    },{
                        id: 11,
                        code:'i',
                        name:'Tax rate 2',
                        value: "",
                    },{
                        id: 12,
                        code:'j',
                        name:'ISO country code',
                        value: "",
                    },{
                        id: 13,
                        code:'k',
                        name:'MARC country code',
                        value: "",
                    },{
                        id: 14,
                        code:'m',
                        name:'Identification of pricing entity',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'TRADE AVAILABILITY INFORMATION',
                code:'366',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'2',
                        name:'Source of availability status code',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'a',
                        name:'Publishers compressed title identification',
                        value: "",
                    },{
                        id: 3,
                        code:'b',
                        name:'Detailed date of publication',
                        value: "",
                    },{
                        id: 5,
                        code:'c',
                        name:'Availability status code',
                        value: "",
                    },{
                        id: 6,
                        code:'d',
                        name:'Expected next availability date',
                        value: "",
                    },{
                        id: 7,
                        code:'e',
                        name:'Note',
                        value: "",
                    },{
                        id: 8,
                        code:'f',
                        name:'Publisherss discount category',
                        value: "",
                    },{
                        id: 9,
                        code:'g',
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
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            }
        ]
    },{
        tab:4,
        fields:[
            {
                id: 0,
                name: 'SERIES STATEMENT/ADDED ENTRY--TITLE',
                code:'440',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'9',
                        name:'9 (RLIN)',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'a',
                        name:'Title',
                        value: "",
                    },{
                        id: 3,
                        code:'n',
                        name:'Number of part/section of a work',
                        value: "",
                    },{
                        id: 5,
                        code:'p',
                        name:'Name of part/section of a work',
                        value: "",
                    },{
                        id: 6,
                        code:'v',
                        name:'Volume/sequential designation',
                        value: "",
                    },{
                        id: 7,
                        code:'x',
                        name:'International Standard Serial Number',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
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
                        code:'v',
                        name:'Volume/sequential designation',
                        value: "",
                    },{
                        id: 3,
                        code:'x',
                        name:'International Standard Serial Number',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework']

            }
        ]
    },{
        tab:5,
        fields:[
            {
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
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
                        code:'g',
                        name:'Miscellaneous information',
                        value: "",
                    },{
                        id: 3,
                        code:'r',
                        name:'Statement of responsibility',
                        value: "",
                    },{
                        id: 5,
                        code:'t',
                        name:'Title',
                        value: "",
                    },{
                        id: 6,
                        code:'u',
                        name:'Uniform Resource Identifier',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
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
                        code:'u',
                        name:'Uniform Resource Identifier',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
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
                        code:'d',
                        name:'Title point value',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
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
                        code:'d',
                        name:'Order number',
                        value: "",
                    },{
                        id: 6,
                        code:'u',
                        name:'Uniform Resource Identifier',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
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
                        code:'d',
                        name:'Date of reproduction',
                        value: "",
                    },{
                        id: 6,
                        code:'e',
                        name:'Physical description of reproduction',
                        value: "",
                    },{
                        id: 7,
                        code:'f',
                        name:'Series statement of reproduction',
                        value: "",
                    },{
                        id: 8,
                        code:'m',
                        name:'Dates and/or sequential designation of issues reproduced',
                        value: "",
                    },{
                        id: 9,
                        code:'n',
                        name:'Note about reproduction',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
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
                        code:'i',
                        name:'Display text',
                        value: "",
                    },{
                        id: 3,
                        code:'u',
                        name:'Uniform Resource Identifier',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
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
                        code:'d',
                        name:'Date of acquisition',
                        value: "",
                    },{
                        id: 6,
                        code:'e',
                        name:'Accession number',
                        value: "",
                    },{
                        id: 7,
                        code:'f',
                        name:'Owner',
                        value: "",
                    },{
                        id: 8,
                        code:'h',
                        name:'Purchase price',
                        value: "",
                    },{
                        id: 9,
                        code:'n',
                        name:'Extent',
                        value: "",
                    },{
                        id: 10,
                        code:'o',
                        name:'Type of unit',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
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
                        code:'d',
                        name:'Bibliographic reference',
                        value: "",
                    },{
                        id: 6,
                        code:'u',
                        name:'Uniform Resource Identifier',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
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
                        code:'z',
                        name:'International Standard Book Number',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
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
                        code:'d',
                        name:'Presentation format',
                        value: "",
                    },{
                        id: 6,
                        code:'e',
                        name:'Number of copies',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
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
                        code:'u',
                        name:'Uniform Resource Identifier',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
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
                        code:'d',
                        name:'Action interval',
                        value: "",
                    },{
                        id: 6,
                        code:'e',
                        name:'Contingency for action',
                        value: "",
                    },{
                        id: 8,
                        code:'f',
                        name:'Authorization',
                        value: "",
                    },{
                        id: 9,
                        code:'h',
                        name:'Jurisdiction',
                        value: "",
                    },{
                        id: 10,
                        code:'i',
                        name:'Method of action',
                        value: "",
                    },{
                        id: 11,
                        code:'j',
                        name:'Site of action',
                        value: "",
                    },{
                        id: 12,
                        code:'k',
                        name:'Action agent',
                        value: "",
                    },{
                        id: 13,
                        code:'l',
                        name:'Status',
                        value: "",
                    },{
                        id: 14,
                        code:'n',
                        name:'Extent',
                        value: "",
                    },{
                        id: 15,
                        code:'o',
                        name:'Type of unit',
                        value: "",
                    },{
                        id: 16,
                        code:'u',
                        name:'Uniform Resource Identifier',
                        value: "",
                    },{
                        id: 17,
                        code:'z',
                        name:'Public note',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'EXHIBITIONS NOTE',
                code:'585',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'3',
                        name:'Materials specified',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'a',
                        name:'Exhibitions note',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
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
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            }
        ]
    },{
        tab:6,
        fields:[
            {
                id: 0,
                name: 'SUBJECT ADDED ENTRY--PERSONAL NAME',
                code:'600',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'2',
                        name:'Source of heading or term',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'9',
                        name:'9 (RLIN)',
                        value: "",
                    },{
                        id: 3,
                        code:'a',
                        name:'Personal name',
                        value: "",
                    },{
                        id: 5,
                        code:'b',
                        name:'Numeration',
                        value: "",
                    },{
                        id: 6,
                        code:'c',
                        name:'Titles and other words associated with a name',
                        value: "",
                    },{
                        id: 7,
                        code:'d',
                        name:'Dates associated with a name',
                        value: "",
                    },{
                        id: 8,
                        code:'q',
                        name:'Fuller form of name',
                        value: "",
                    },{
                        id: 9,
                        code:'t',
                        name:'Title of a work',
                        value: "",
                    },{
                        id: 10,
                        code:'v',
                        name:'Form subdivision',
                        value: "",
                    },{
                        id: 11,
                        code:'x',
                        name:'General subdivision',
                        value: "",
                    },{
                        id: 12,
                        code:'y',
                        name:'Chronological subdivision',
                        value: "",
                    },{
                        id: 13,
                        code:'z',
                        name:'Geographic subdivision',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'SUBJECT ADDED ENTRY--CORPORATE NAME',
                code:'610',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'2',
                        name:'Source of heading or term',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'9',
                        name:'9 (RLIN)',
                        value: "",
                    },{
                        id: 3,
                        code:'a',
                        name:'Corporate name or jurisdiction name as entry element',
                        value: "",
                    },{
                        id: 5,
                        code:'b',
                        name:'Subordinate unit',
                        value: "",
                    },{
                        id: 6,
                        code:'c',
                        name:'Location of meeting',
                        value: "",
                    },{
                        id: 7,
                        code:'d',
                        name:'Date of meeting or treaty signing',
                        value: "",
                    },{
                        id: 8,
                        code:'t',
                        name:'Title of a work',
                        value: "",
                    },{
                        id: 9,
                        code:'v',
                        name:'Form subdivision',
                        value: "",
                    },{
                        id: 10,
                        code:'x',
                        name:'General subdivision',
                        value: "",
                    },{
                        id: 11,
                        code:'y',
                        name:'Chronological subdivision',
                        value: "",
                    },{
                        id: 12,
                        code:'z',
                        name:'Geographic subdivision',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'SUBJECT ADDED ENTRY--MEETING NAME',
                code:'611',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'2',
                        name:'Source of heading or term',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'9',
                        name:'9 (RLIN)',
                        value: "",
                    },{
                        id: 3,
                        code:'a',
                        name:'Meeting name or jurisdiction name as entry element',
                        value: "",
                    },{
                        id: 5,
                        code:'c',
                        name:'Location of meeting',
                        value: "",
                    },{
                        id: 6,
                        code:'d',
                        name:'Date of meeting',
                        value: "",
                    },{
                        id: 7,
                        code:'e',
                        name:'Subordinate unit',
                        value: "",
                    },{
                        id: 8,
                        code:'t',
                        name:'Title of a work',
                        value: "",
                    },{
                        id: 9,
                        code:'v',
                        name:'Form subdivision',
                        value: "",
                    },{
                        id: 10,
                        code:'x',
                        name:'General subdivision',
                        value: "",
                    },{
                        id: 11,
                        code:'y',
                        name:'Chronological subdivision',
                        value: "",
                    },{
                        id: 12,
                        code:'z',
                        name:'Geographic subdivision',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'SUBJECT ADDED ENTRY--UNIFORM TITLE',
                code:'630',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'2',
                        name:'Source of heading or term',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'9',
                        name:'9 (RLIN)',
                        value: "",
                    },{
                        id: 3,
                        code:'a',
                        name:'Uniform title',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Relator term',
                        value: "",
                    },{
                        id: 6,
                        code:'l',
                        name:'Language of a work',
                        value: "",
                    },{
                        id: 7,
                        code:'t',
                        name:'Title of a work',
                        value: "",
                    },{
                        id: 8,
                        code:'v',
                        name:'Form subdivision',
                        value: "",
                    },{
                        id: 10,
                        code:'x',
                        name:'General subdivision',
                        value: "",
                    },{
                        id: 11,
                        code:'y',
                        name:'Chronological subdivision',
                        value: "",
                    },{
                        id: 12,
                        code:'z',
                        name:'Geographic subdivision',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'SUBJECT ADDED ENTRY--CHRONOLOGICAL TERM',
                code:'648',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'2',
                        name:'Source of heading or term',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'9',
                        name:'9 (RLIN)',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Chronological term',
                        value: "",
                    },{
                        id: 8,
                        code:'h',
                        name:'Form subdivision',
                        value: "",
                    },{
                        id: 10,
                        code:'j',
                        name:'General subdivision',
                        value: "",
                    },{
                        id: 11,
                        code:'k',
                        name:'Chronological subdivision',
                        value: "",
                    },{
                        id: 12,
                        code:'n',
                        name:'Geographic subdivision',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
                name: 'SUBJECT ADDED ENTRY--TOPICAL TERM',
                code:'650',
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
                        name:'Topical term or geographic name as entry element',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Topical term following geographic name as entry element',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Location of event',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Active dates',
                        value: "",
                    },{
                        id: 8,
                        code:'h',
                        name:'Relator term',
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
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'SUBJECT ADDED ENTRY--GEOGRAPHIC NAME',
                code:'651',
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
                        name:'Geographic name',
                        value: "",
                    },{
                        id: 8,
                        code:'h',
                        name:'Relator term',
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
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials']

            },{
                id: 0,
                name: 'INDEX TERM--UNCONTROLLED',
                code:'653',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Uncontrolled term',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'SUBJECT ADDED ENTRY--FACETED TOPICAL TERM',
                code:'654',
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
                        name:'Focus term',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Non-focus term',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Facet/hierarchy designation',
                        value: "",
                    },{
                        id: 8,
                        code:'h',
                        name:'Relator term',
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
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
                name: 'INDEX TERM--GENRE/FORM',
                code:'655',
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
                        name:'Genre/form data or focus term',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Non-focus term',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Facet/hierarchy designation',
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
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'INDEX TERM--OCCUPATION',
                code:'656',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'9 (RLIN)',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'INDEX TERM--FUNCTION',
                code:'657',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'9 (RLIN)',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'INDEX TERM--CURRICULUM OBJECTIVE',
                code:'658',
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
                        name:'Main curriculum objective',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Subordinate curriculum objective',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Curriculum code',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'SUBJECT ADDED ENTRY--HIERARCHICAL PLACE NAME',
                code:'662',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Source of term',
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
                        name:'Country or larger entity',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'First-order political jurisdiction',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Intermediate political jurisdiction',
                        value: "",
                    },{
                        id: 10,
                        code:'j',
                        name:'City',
                        value: "",
                    },{
                        id: 11,
                        code:'k',
                        name:'Relator term',
                        value: "",
                    },{
                        id: 12,
                        code:'m',
                        name:'City subsection',
                        value: "",
                    },{
                        id: 13,
                        code:'n',
                        name:'Other nonjurisdictional geographic region and feature',
                        value: "",
                    },{
                        id: 14,
                        code:'o',
                        name:'Extraterrestrial area',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
                name: 'LOCAL SUBJECT ADDED ENTRY--TOPICAL TERM (OCLC, RLIN)',
                code:'690',
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
                        name:'Topical term or geographic name as entry element',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Topical term following geographic name as entry element',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Active dates',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Relator term',
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
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'LOCAL SUBJECT ADDED ENTRY--GEOGRAPHIC NAME (RLIN)',
                code:'691',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'9 (RLIN)',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'LOCAL SUBJECT ADDED ENTRY--PERSONAL NAME (RLIN)',
                code:'696',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'9 (RLIN)',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'LOCAL SUBJECT ADDED ENTRY--CORPORATE NAME (RLIN)',
                code:'697',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'9 (RLIN)',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'LOCAL SUBJECT ADDED ENTRY--MEETING NAME (RLIN)',
                code:'698',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'9 (RLIN)',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'LOCAL SUBJECT ADDED ENTRY--UNIFORM TITLE (RLIN)',
                code:'699',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'9 (RLIN)',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            }
        ]
    },{
        tab:7,
        fields:[
            {
                id: 0,
                name: 'ADDED ENTRY--PERSONAL NAME',
                code:'700',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Relator code',
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
                        id: 10,
                        code:'j',
                        name:'Relator term',
                        value: "",
                    },{
                        id: 11,
                        code:'k',
                        name:'Fuller form of name',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'ADDED ENTRY--CORPORATE NAME',
                code:'710',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Relator code',
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
                        name:'Corporate name or jurisdiction name as entry element',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Subordinate unit',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Location of meeting',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Date of meeting or treaty signing',
                        value: "",
                    },{
                        id: 10,
                        code:'j',
                        name:'Relator term',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'ADDED ENTRY--MEETING NAME',
                code:'711',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Relator code',
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
                        name:'Meeting name or jurisdiction name as entry element',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Subordinate unit',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Location of meeting',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Date of meeting',
                        value: "",
                    },{
                        id: 10,
                        code:'j',
                        name:'Relator term',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'ADDED ENTRY--UNCONTROLLED NAME',
                code:'720',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Relator code',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Name',
                        value: "",
                    },{
                        id: 10,
                        code:'j',
                        name:'Relator term',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'ADDED ENTRY--UNIFORM TITLE',
                code:'730',
                indicators:['',''],
                subFields:[
                   
                    {
                        id: 2,
                        code:'b',
                        name:'9 (RLIN)',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Uniform title',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Language of a work',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Medium of performance for music',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Key for music',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'ADDED ENTRY--UNCONTROLLED RELATED/ANALYTICAL TITLE',
                code:'740',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Uncontrolled related/analytical title',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
                name: 'MAIN SERIES ENTRY ',
                code:'760',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Edition',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'LOCAL ADDED ENTRY--PERSONAL NAME (RLIN)',
                code:'796',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'9 (RLIN)',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'LOCAL ADDED ENTRY--CORPORATE NAME (RLIN)',
                code:'797',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'9 (RLIN)',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'LOCAL ADDED ENTRY--MEETING NAME (RLIN)',
                code:'798',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'9 (RLIN)',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'LOCAL ADDED ENTRY--UNIFORM TITLE (RLIN)',
                code:'799',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'9 (RLIN)',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            }
        ]
    },{
        tab:8,
        fields:[
            {
                id: 0,
                name: 'SERIES ADDED ENTRY--PERSONAL NAME',
                code:'800',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Relator code',
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
                        id: 10,
                        code:'j',
                        name:'Relator term',
                        value: "",
                    },{
                        id: 11,
                        code:'k',
                        name:'Fuller form of name',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'SERIES ADDED ENTRY--CORPORATE NAME',
                code:'810',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Relator code',
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
                        name:'Corporate name or jurisdiction name as entry element',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Subordinate unit',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Location of meeting',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Date of meeting or treaty signing',
                        value: "",
                    },{
                        id: 10,
                        code:'j',
                        name:'Relator term',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'SERIES ADDED ENTRY--MEETING NAME',
                code:'811',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Relator code',
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
                        name:'Meeting name or jurisdiction name as entry element',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Subordinate unit',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Location of meeting',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Date of meeting',
                        value: "",
                    },{
                        id: 10,
                        code:'j',
                        name:'Relator term',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'SERIES ADDED ENTRY--UNIFORM TITLE',
                code:'830',
                indicators:['',''],
                subFields:[
                   
                    {
                        id: 2,
                        code:'b',
                        name:'9 (RLIN)',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Uniform title',
                        value: "",
                    },{
                        id: 5,
                        code:'e',
                        name:'Language of a work',
                        value: "",
                    },{
                        id: 6,
                        code:'f',
                        name:'Version',
                        value: "",
                    },{
                        id: 7,
                        code:'g',
                        name:'Key for music',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'Location',
                code:'852',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Location',
                        value: "",
                        isRequired: true
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Sublocation or collection',
                        value: "",
                        isRequired: false
                    },{
                        id: 3,
                        code:'c',
                        name:'Shelving location',
                        value: "",
                        isRequired: false
                    },{
                        id: 5,
                        code:'d',
                        name:'Former shelving location',
                        value: "",
                        isRequired: false
                    },{
                        id: 6,
                        code:'e',
                        name:'Address',
                        value: "",
                        isRequired: false
                    },{
                        id: 10,
                        code:'f',
                        name:'Coded location qualifier',
                        value: "",
                        isRequired: false
                    },{
                        id: 11,
                        code:'g',
                        name:'Non-coded location qualifier',
                        value: "",
                        isRequired: false
                    },{
                        id: 12,
                        code:'h',
                        name:'Classification part',
                        value: "",
                        isRequired: false
                    },{
                        id: 13,
                        code:'i',
                        name:' Item part',
                        value: "",
                        isRequired: false
                    },{
                        id: 14,
                        code:'j',
                        name:'Shelving control number',
                        value: "",
                        isRequired: false
                    },{
                        id: 15,
                        code:'l',
                        name:'Call number prefix',
                        value: "",
                        isRequired: false
                    },{
                        id: 16,
                        code:'k',
                        name:'Shelving form of title',
                        value: "",
                        isRequired: false
                    },{
                        id: 17,
                        code:'m',
                        name:'Call number suffix',
                        value: "",
                        isRequired: false
                    },{
                        id: 18,
                        code:'n',
                        name:'Country code',
                        value: "",
                        isRequired: false
                    },{
                        id: 19,
                        code:'o',
                        name:'Piece designation',
                        value: "",
                        isRequired: false
                    },{
                        id: 20,
                        code:'p',
                        name:'Piece physical condition',
                        value: "",
                        isRequired: false
                    },{
                        id: 21,
                        code:'q',
                        name:'Copyright article-fee code',
                        value: "",
                        isRequired: false
                    },{
                        id: 22,
                        code:'r',
                        name:'Copy number',
                        value: "",
                        isRequired: false
                    },{
                        id: 23,
                        code:'s',
                        name:'Uniform Resource Identifier',
                        value: "",
                        isRequired: false
                    },{
                        id: 24,
                        code:'t',
                        name:'Nonpublic note',
                        value: "",
                        isRequired: false
                    },{
                        id: 25,
                        code:'u',
                        name:'Public note',
                        value: "",
                        isRequired: false
                    },{
                        id: 26,
                        code:'v',
                        name:'Source of classification or shelving scheme',
                        value: "",
                        isRequired: false
                    },{
                        id: 27,
                        code:'w',
                        name:'Materials specified',
                        value: "",
                        isRequired: false
                    },{
                        id: 28,
                        code:'x',
                        name:'Linkage',
                        value: "",
                        isRequired: false
                    },{
                        id: 28,
                        code:'y',
                        name:'Sequence number',
                        value: "",
                        isRequired: false
                    }
                    
                ],
                isRequired: true,
                frameworks:['Default Framework','Books/Workbooks','CD/DVD','Serials']

            },
            {
                id: 0,
                name: 'ELECTRONIC LOCATION AND ACCESS',
                code:'856',
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
                        name:'Host name',
                        value: "",
                    },{
                        id: 3,
                        code:'c',
                        name:'Access number',
                        value: "",
                    },{
                        id: 5,
                        code:'d',
                        name:'Compression information',
                        value: "",
                    },{
                        id: 6,
                        code:'e',
                        name:'Path',
                        value: "",
                    },{
                        id: 10,
                        code:'f',
                        name:'Electronic name',
                        value: "",
                    },{
                        id: 11,
                        code:'g',
                        name:'Processor of request',
                        value: "",
                    },{
                        id: 12,
                        code:'h',
                        name:'Instruction',
                        value: "",
                    },{
                        id: 13,
                        code:'i',
                        name:'Bits per second',
                        value: "",
                    },{
                        id: 14,
                        code:'j',
                        name:'Password',
                        value: "",
                    },{
                        id: 15,
                        code:'l',
                        name:'Logon',
                        value: "",
                    },{
                        id: 16,
                        code:'k',
                        name:'Contact for access assistance',
                        value: "",
                    },{
                        id: 17,
                        code:'m',
                        name:'Name of location of host',
                        value: "",
                    },{
                        id: 18,
                        code:'n',
                        name:'Operating system',
                        value: "",
                    },{
                        id: 19,
                        code:'o',
                        name:'Port',
                        value: "",
                    },{
                        id: 20,
                        code:'p',
                        name:'Electronic format type',
                        value: "",
                    },{
                        id: 21,
                        code:'q',
                        name:'Settings',
                        value: "",
                    },{
                        id: 22,
                        code:'r',
                        name:'File size',
                        value: "",
                    },{
                        id: 23,
                        code:'s',
                        name:'Terminal emulation',
                        value: "",
                    },{
                        id: 24,
                        code:'t',
                        name:'Uniform Resource Identifier',
                        value: "",
                    },{
                        id: 25,
                        code:'u',
                        name:'Hours access method available',
                        value: "",
                    },{
                        id: 26,
                        code:'v',
                        name:'Record control number',
                        value: "",
                    },{
                        id: 27,
                        code:'w',
                        name:'Nonpublic note',
                        value: "",
                    },{
                        id: 28,
                        code:'x',
                        name:'Link text',
                        value: "",
                    },{
                        id: 28,
                        code:'y',
                        name:'Public note',
                        value: "",
                    }
                    
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'NON-MARC INFORMATION FIELD',
                code:'887',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Source of data',
                        value: "",
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'Content of non-MARC field',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework']

            },{
                id: 0,
                name: 'LOCAL SERIES ADDED ENTRY--PERSONAL NAME (RLIN)',
                code:'896',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'9 (RLIN)',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'LOCAL SERIES ADDED ENTRY--CORPORATE NAME (RLIN)',
                code:'897',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'9 (RLIN)',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'LOCAL SERIES ADDED ENTRY--MEETING NAME (RLIN)',
                code:'898',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'9 (RLIN)',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            },{
                id: 0,
                name: 'LOCAL SERIES ADDED ENTRY--UNIFORM TITLE (RLIN)',
                code:'899',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'9 (RLIN)',
                        value: "",
                    }
                ],
                isRequired: false,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            }
        ]
    },{
        tab: 9,
        fields:[
            {
                id: 0,
                name: 'ADDED ENTRY ELEMENTS',
                code:'942',
                indicators:['',''],
                subFields:[
                    {
                        id: 1,
                        code:'a',
                        name:'Source of classification or shelving scheme',
                        value: '',
                        isRequired: true,
                        options:['Dewey Decimal Classification','Library of Congress Classification']
                        
                    },
                    {
                        id: 2,
                        code:'b',
                        name:'item type',
                        value: "",
                        isRequired: true,
                        options:['Journal','Reference','E-Journal','Multimedia','Magazine','Fiction','E-book','Filipiniana','Research Paper','Series','Atlas','Computer File']
                    },
                    {
                        id: 2,
                        code:'c',
                        name:'Use Restrictions',
                        value: "",
                        isRequired: true,
                        options:['No Restrictions','Restricted Access']
                    },
                    {
                        id: 2,
                        code:'d',
                        name:'Damaged Status',
                        value: "",
                        isRequired: true,
                        options:['Not Damaged','Damaged']
                    },
                    {
                        id: 2,
                        code:'e',
                        name:'Collection Code',
                        value: "",
                        isRequired: true,
                        
                    },{
                        id: 5,
                        code:'i',
                        name:'Language',
                        isRequired: true,
                        options:['All','English','Filipino']
                    },{
                        id: 5,
                        code:'f',
                        name:'Current Location',
                        value: "",
                        isRequired: true,
                    },{
                        id: 5,
                        code:'g',
                        name:'Shelving Location',
                        value: "",
                        isRequired: true,
                    },{
                        id: 5,
                        code:'h',
                        name:'Date acquired',
                        value: "",
                        isRequired: true,
                    },{
                        id: 5,
                        code:'i',
                        name:'Source of Acquisition',
                        value: "",
                        isRequired: true,
                    },{
                        id: 3,
                        code:'j',
                        name:'Edition',
                        value: "",
                        isRequired: false,
                    },{
                        id: 5,
                        code:'k',
                        name:'Classification part',
                        value: "",
                        isRequired: false,
                    },{
                        id: 6,
                        code:'l',
                        name:'Item part',
                        value: "",
                        isRequired: false,
                    },{
                        id: 10,
                        code:'m',
                        name:'Call number prefix',
                        value: "",
                        isRequired: false,
                    },{
                        id: 11,
                        code:'n',
                        name:'Call number suffix',
                        value: "",
                        isRequired: false,
                    },{
                        id: 12,
                        code:'o',
                        name:'Suppress in OPAC',
                        value: "",
                        isRequired: false,
                    }
                ],
                isRequired: true,
                frameworks:['Default Framework','Books/Workbooks','Serials','CD/DVD General']

            }
        ]
    }
]



export function removeDuplicateObjectFromArray(array, key) {
    var check = new Set();
    return array.filter(obj => !check.has(obj[key]) && check.add(obj[key]));
}


export  function convertData(recSet, recArray) {

    const arrayOfArrayOfObjects = recSet.map((item)=>{
        return recArray.filter((fitem)=>{
            return item.book_id === fitem.book_id;
        })
    })


     const arrayOfObjectsBooks = recSet.map((item,index)=>{

        const arraySetFields = removeDuplicateObjectFromArray(arrayOfArrayOfObjects[index],"field_code");
        
        const fields = arraySetFields.map((item)=>{

            const subFields = arrayOfArrayOfObjects[index].map((fitem)=>{
                if(fitem.field_code === item.field_code) {
                    return {
                        id: fitem.sub_id,
                        code: fitem.sub_code,
                        name:fitem.sub_name,
                        value: fitem.sub_value,
                    }
                }
            }).filter((item)=>{
                return typeof item !== 'undefined';
            })


            return {
                id: item.field_id,
                code: item.field_code,
                name: item.field_name,
                indicator1: item.field_indicator_one,
                indicator2: item.field_indicator_two,
                subFields:subFields,
            }
        });


        return {
            id: item.book_id,
            img: item.book_image,
            copies: item.book_quantity,
            fields: fields
        }
    })

    // console.log(arrayOfObjectsBooks)
    return arrayOfObjectsBooks;
}

