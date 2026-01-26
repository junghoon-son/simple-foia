// Campaign data - edit this file to add new campaigns
// NO EXTERNAL REQUESTS: All data is local. No analytics, no tracking, no data collection.

const allCampaigns = {
  "alex-pretti": {
    "id": "alex-pretti",
    "title": "Alex Pretti Case — Border Patrol Shooting",
    "date": "2026-01-25",
    "status": "active",
    "image": "images/alex-pretti.jpg",
    "summary": "Alex Pretti, 37, ICU nurse and U.S. citizen, shot and killed by Border Patrol agents in Minneapolis on January 24, 2026. Videos show he was holding a phone, not a gun. DHS claims he wanted to 'massacre law enforcement.' Federal authorities blocking state investigation—again.",
    "keywords": ["border patrol", "cbp", "minneapolis", "shooting", "obstruction", "citizen", "alex pretti", "icu nurse", "va hospital", "phone", "video"],
    "sources": [
      {"name": "PBS NewsHour", "url": "https://www.pbs.org/newshour/nation/man-shot-and-killed-by-federal-officers-in-minnesota-was-an-icu-nurse-his-parents-say"},
      {"name": "CBS Minnesota", "url": "https://www.cbsnews.com/minnesota/live-updates/reported-shooting-south-minneapolis-federal-agents-protesters/"},
      {"name": "ABC News", "url": "https://abcnews.go.com/US/alex-pretti-icu-nurse-killed-federal-agent-minneapolis/story?id=129525591"},
      {"name": "Washington Post", "url": "https://www.washingtonpost.com/nation/2026/01/24/alex-pretti-minneapolis-shooting-victim/"},
      {"name": "Al Jazeera", "url": "https://www.aljazeera.com/news/2026/1/25/who-was-alex-pretti-the-nurse-shot-dead-by-federal-agents-in-minneapolis"},
      {"name": "Star Tribune", "url": "https://www.startribune.com/alex-pretti-identified-as-man-fatally-shot-by-federal-officers-in-minneapolis/601570109"}
    ],
    "agencies": {
      "doj": {
        "name": "DOJ",
        "fullName": "Department of Justice",
        "description": "Deputy AG Blanche blamed Democratic leaders; jurisdiction decisions.",
        "email": "MRUFOIA.Requests@usdoj.gov",
        "portal": "https://www.justice.gov/oip/submit-and-track-request-or-appeal",
        "address": "Department of Justice\nOffice of Information Policy\n6th Floor, 441 G Street, NW\nWashington, D.C. 20530",
        "requests": [
          "All records related to the fatal shooting of Alex Jeffrey Pretti by federal agents on January 24, 2026.",
          "All records related to Deputy Attorney General Todd Blanche's statements blaming Democratic leaders for 'creating this escalation.'",
          "All communications between DOJ and Minnesota officials (BCA, Hennepin County Attorney Mary Moriarty, Governor Walz) regarding investigation access.",
          "All records related to the decision to block state investigators from the crime scene despite a signed search warrant.",
          "All records related to any civil rights review of this shooting.",
          "All legal memoranda regarding federal jurisdiction and state access to evidence in federal agent shootings."
        ]
      },
      "fbi": {
        "name": "FBI",
        "fullName": "Federal Bureau of Investigation",
        "description": "Federal investigation into the shooting.",
        "email": null,
        "portal": "https://efoia.fbi.gov/",
        "address": "Federal Bureau of Investigation\nAttn: FOIA/PA Request\nRecord/Information Dissemination Section\n170 Marcel Drive\nWinchester, VA 22602",
        "requests": [
          "All records related to the fatal shooting of Alex Jeffrey Pretti on January 24, 2026, in Minneapolis.",
          "All video footage collected or analyzed, including footage showing what Pretti was holding when shot.",
          "All communications between FBI and Minnesota BCA regarding investigation access and jurisdiction.",
          "All witness statements and investigative interviews conducted.",
          "All evidence collected: firearms, ammunition casings, cell phones, forensic reports, and autopsy reports.",
          "All records related to the discrepancy between federal claims (Pretti approached with a gun) and video evidence (Pretti was holding his phone)."
        ]
      },
      "ice": {
        "name": "ICE",
        "fullName": "Immigration and Customs Enforcement",
        "description": "ICE agents were present during the operation; records of coordination.",
        "email": null,
        "portal": "https://www.ice.gov/foia",
        "address": "U.S. Immigration and Customs Enforcement\nFreedom of Information Act Office\n500 12th Street, S.W., Stop 5009\nWashington, D.C. 20536-5009",
        "requests": [
          "All records related to the January 24, 2026 immigration enforcement operation in Minneapolis during which Alex Pretti was killed.",
          "All records related to ICE coordination with Border Patrol on this operation.",
          "All records identifying the target of the operation (reportedly an undocumented immigrant wanted for domestic assault).",
          "All body-worn camera and dashcam footage from ICE agents present at the scene.",
          "All communications between ICE, CBP, and DHS regarding the shooting and subsequent investigation.",
          "All records related to ICE presence at protests in Minneapolis following the January 7, 2026 killing of Renee Good."
        ]
      },
      "cbp": {
        "name": "CBP",
        "fullName": "U.S. Customs and Border Protection",
        "description": "Border Patrol agents fired the shots; Commander Bovino made false public statements.",
        "email": null,
        "portal": "https://www.foia.gov/",
        "address": "U.S. Customs and Border Protection\nFOIA Division\n90 K Street NE, 9th Floor\nWashington, D.C. 20229",
        "requests": [
          "All records related to the fatal shooting of Alex Jeffrey Pretti, a U.S. citizen, by Border Patrol agents on January 24, 2026, in Minneapolis, Minnesota, at East 26th Street and Nicollet Avenue.",
          "All video footage collected, including body-worn cameras, dashcams, cellphone recordings, and surveillance footage from all CBP/Border Patrol personnel present.",
          "All records related to Border Patrol Commander Greg Bovino's public statements claiming Pretti 'wanted to do maximum damage and massacre law enforcement.'",
          "All evidence supporting or contradicting the claim that Pretti approached agents with a firearm, including witness statements and video analysis.",
          "All records related to the immigration enforcement operation on January 24, 2026, including the target individual, planning documents, and after-action reports.",
          "All communications between CBP, DHS, ICE, and DOJ regarding jurisdiction and the decision to block Minnesota BCA access to the crime scene.",
          "All records related to the agents involved: personnel files, training records, prior complaints, use-of-force history, and current duty status.",
          "All training records for the Border Patrol agents who fired shots, including total hours of firearms training, de-escalation training, and use-of-force training completed."
        ]
      },
      "dhs": {
        "name": "DHS",
        "fullName": "Department of Homeland Security",
        "description": "Secretary Noem made unsubstantiated accusations; DHS blocking state investigation.",
        "email": null,
        "portal": "https://www.foia.gov/",
        "address": "Department of Homeland Security\nPrivacy Office, Mail Stop 0655\n2707 Martin Luther King Jr. Ave. SE\nWashington, D.C. 20528-0655",
        "requests": [
          "All records related to the fatal shooting of Alex Jeffrey Pretti by federal agents on January 24, 2026, in Minneapolis.",
          "All records related to DHS Secretary Kristi Noem's public statements about Alex Pretti and the shooting.",
          "All communications between DHS leadership and White House regarding this incident and public messaging.",
          "All video footage in DHS possession showing the shooting and events leading up to it.",
          "All records related to the Temporary Restraining Order issued by U.S. District Judge Eric Tostrud barring DHS from altering or destroying evidence.",
          "All communications between DHS, CBP, and Minnesota BCA regarding crime scene access and the BCA's signed search warrant.",
          "All records related to DHS policies on cooperation with state investigators in federal agent shootings.",
          "The autopsy report, medical examiner findings, and all forensic reports related to Alex Pretti's death."
        ]
      }
    },
    "complaints": {
      "dhs-oig": {
        "name": "DHS Inspector General",
        "description": "Report false statements, unjustified use of force, and obstruction of state investigation.",
        "email": "DHS-OIG.OfficePublicAffairs@oig.dhs.gov",
        "portal": "https://www.oig.dhs.gov/hotline",
        "address": "Department of Homeland Security\nOffice of Inspector General\n245 Murray Lane SW\nWashington, D.C. 20528",
        "subject": "Complaint: False Statements, Excessive Force, and Obstruction - Alex Pretti Shooting",
        "allegations": [
          "UNJUSTIFIED USE OF DEADLY FORCE: Border Patrol agents shot and killed Alex Jeffrey Pretti, a 37-year-old U.S. citizen and ICU nurse. Video evidence shows Pretti was holding his phone, not a gun, when he was tackled and shot. A sworn witness declaration states he was trying to help a woman being pepper-sprayed.",
          "FALSE PUBLIC STATEMENTS: Border Patrol Commander Greg Bovino falsely claimed Pretti 'wanted to do maximum damage and massacre law enforcement.' DHS Secretary Kristi Noem echoed these accusations. Video evidence directly contradicts these claims.",
          "OBSTRUCTION OF JUSTICE: Federal authorities blocked Minnesota BCA from accessing the crime scene despite investigators having a signed search warrant. This is the second such obstruction in Minneapolis in January 2026.",
          "EVIDENCE SUPPRESSION RISK: U.S. District Judge Eric Tostrud issued a TRO barring DHS from altering or destroying evidence, indicating judicial concern about evidence tampering.",
          "FAILURE TO NOTIFY FAMILY: Federal agencies failed to notify Pretti's family of his death. They learned through an Associated Press reporter and had to confirm through the county medical examiner."
        ],
        "actions": [
          "Investigate the use of deadly force against Alex Pretti",
          "Investigate Commander Bovino's and Secretary Noem's false public statements",
          "Investigate the decision to block state investigators despite a signed warrant",
          "Preserve all video footage showing the shooting",
          "Investigate the failure to notify Pretti's family",
          "Refer criminal conduct to appropriate authorities"
        ]
      },
      "doj-oig": {
        "name": "DOJ Inspector General",
        "description": "Report obstruction of state investigation and civil rights violations.",
        "email": "oig.hotline@usdoj.gov",
        "portal": "https://oig.justice.gov/hotline",
        "address": "Department of Justice\nOffice of the Inspector General\n950 Pennsylvania Avenue, NW\nSuite 4706\nWashington, D.C. 20530",
        "subject": "Complaint: Obstruction of Justice and Civil Rights Violations - Alex Pretti Case",
        "allegations": [
          "OBSTRUCTION OF STATE INVESTIGATION: Federal authorities blocked Minnesota BCA from accessing the crime scene despite a signed search warrant. This mirrors the obstruction in the Renee Good case 17 days earlier.",
          "CIVIL RIGHTS VIOLATION: A U.S. citizen was killed by federal agents. Video evidence contradicts the federal narrative. Federal authorities are preventing independent investigation.",
          "FALSE STATEMENTS: Deputy AG Todd Blanche blamed Democratic leaders for 'creating this escalation' rather than addressing the shooting of an unarmed citizen.",
          "PATTERN OF OBSTRUCTION: This is the second federal agent shooting in Minneapolis in January 2026 where federal authorities have blocked state investigation, suggesting a policy of obstruction."
        ],
        "actions": [
          "Investigate DOJ's role in blocking state investigation",
          "Investigate the pattern of obstruction in Minneapolis shootings",
          "Investigate civil rights violations in this shooting",
          "Preserve all records and evidence",
          "Refer criminal conduct to appropriate authorities"
        ]
      }
    },
    "congress": {
      "subject": "Request for Congressional Oversight - Killing of Alex Pretti by Border Patrol",
      "background": [
        "Alex Jeffrey Pretti, 37-year-old U.S. citizen and ICU nurse at the Minneapolis VA hospital, was shot and killed by Border Patrol agents on January 24, 2026, at East 26th Street and Nicollet Avenue in Minneapolis.",
        "Multiple videos show Pretti was holding his phone, not a gun, when he was tackled by agents. A sworn witness declaration states he was trying to help a woman being pepper-sprayed.",
        "Border Patrol Commander Greg Bovino claimed Pretti 'wanted to do maximum damage and massacre law enforcement.' DHS Secretary Kristi Noem echoed these accusations without evidence.",
        "Minnesota BCA was blocked from accessing the crime scene despite having a signed search warrant—the second such obstruction in Minneapolis in January 2026.",
        "U.S. District Judge Eric Tostrud granted a Temporary Restraining Order barring DHS from altering or destroying evidence.",
        "Federal agencies failed to notify Pretti's family of his death. They learned through an Associated Press reporter.",
        "This shooting occurred just over one mile from where Renee Good was killed by ICE Agent Jonathan Ross on January 7, 2026."
      ],
      "concerns": [
        "A U.S. citizen was killed by federal agents while video shows he was holding a phone, not a weapon",
        "Federal officials made false public statements claiming the victim wanted to 'massacre' officers",
        "Federal government blocked state investigators from the crime scene despite a signed warrant",
        "This is the second federal agent shooting in Minneapolis in 18 days with the same pattern of obstruction",
        "A federal judge found it necessary to issue a TRO to prevent evidence destruction",
        "The victim's family was not notified by federal agencies"
      ],
      "actions": [
        "Enter this matter into the Congressional Record",
        "Initiate emergency oversight hearings on federal agent shootings in Minneapolis",
        "Subpoena all video footage from January 24, 2026",
        "Request records from DHS, CBP, DOJ, FBI, and ICE",
        "Investigate the pattern of obstruction in Minneapolis federal agent shootings",
        "Investigate false statements by Commander Bovino and Secretary Noem",
        "Consider legislation requiring federal cooperation with state investigators in agent shootings"
      ]
    }
  },
  "renee-good": {
    "id": "renee-good",
    "title": "Renee Good Case — ICE Agent Jonathan Ross",
    "date": "2026-01-17",
    "status": "active",
    "image": "images/renee-good.jpg",
    "summary": "Renee Good, U.S. citizen and mother of three, shot by ICE Agent Jonathan Ross in Minneapolis on January 7, 2026. Video shows she posed no threat. Federal authorities blocking state investigation.",
    "keywords": ["ice", "minneapolis", "shooting", "obstruction", "citizen", "jonathan ross", "video", "renee good", "agent ross"],
    "sources": [
      {"name": "The Intercept", "url": "https://theintercept.com/2026/01/08/ice-agent-identified-shooting-minneapolis-jonathan-ross/"},
      {"name": "Star Tribune", "url": "https://www.startribune.com/ice-agent-who-fatally-shot-woman-in-minneapolis-is-identified/601560214"},
      {"name": "CNN", "url": "https://www.cnn.com/2026/01/10/us/ice-shooting-minneapolis-renee-good"},
      {"name": "Newsweek", "url": "https://www.newsweek.com/jonathan-ross-ice-agent-shooting-minneapolis-minnesota-11332093"},
      {"name": "WBUR", "url": "https://www.wbur.org/news/2026/01/09/johnathan-ross-ice-killing-renee-good-minneapolis-background"},
      {"name": "Wikipedia", "url": "https://en.wikipedia.org/wiki/Killing_of_Renee_Good"}
    ],
    "agencies": {
      "doj": {
        "name": "DOJ",
        "fullName": "Department of Justice",
        "description": "U.S. Attorney reversed joint investigation; jurisdiction decisions.",
        "email": "MRUFOIA.Requests@usdoj.gov",
        "portal": "https://www.justice.gov/oip/submit-and-track-request-or-appeal",
        "address": "Department of Justice\nOffice of Information Policy\n6th Floor, 441 G Street, NW\nWashington, D.C. 20530",
        "requests": [
          "All records related to the U.S. Attorney's Office decision to reverse the joint investigation agreement with Minnesota BCA.",
          "All communications between DOJ, U.S. Attorney's Office, FBI, DHS, and ICE regarding federal jurisdiction over this case.",
          "All communications between DOJ and Minnesota officials (BCA, AG Keith Ellison, Hennepin County Attorney Mary Moriarty, Governor Walz).",
          "All records related to any civil rights review of this shooting.",
          "All legal memoranda regarding federal jurisdiction and immunity claims for ICE agents in officer-involved shootings."
        ]
      },
      "fbi": {
        "name": "FBI",
        "fullName": "Federal Bureau of Investigation",
        "description": "Leading investigation; blocking state access to evidence.",
        "email": null,
        "portal": "https://efoia.fbi.gov/",
        "address": "Federal Bureau of Investigation\nAttn: FOIA/PA Request\nRecord/Information Dissemination Section\n170 Marcel Drive\nWinchester, VA 22602",
        "requests": [
          "All records related to the fatal shooting of Renee Nicole Good, a U.S. citizen, by ICE Agent Jonathan Ross on January 7, 2026, in Minneapolis, Minnesota.",
          "All video footage collected, including Agent Ross's cellphone video, bystander videos, and any surveillance footage.",
          "All communications between FBI and Minnesota BCA, Hennepin County Attorney, and Minnesota AG regarding investigation access and jurisdiction.",
          "All records related to the decision to exclude Minnesota authorities from joint investigation.",
          "All evidence collected: the ICE agent's firearm, ammunition casings, Renee Good's vehicle, forensic reports, and autopsy reports.",
          "All witness statements and investigative interviews conducted."
        ]
      },
      "ice": {
        "name": "ICE",
        "fullName": "Immigration and Customs Enforcement",
        "description": "Agent Jonathan Ross records, use-of-force history, cellphone video.",
        "email": null,
        "portal": "https://www.ice.gov/foia",
        "address": "U.S. Immigration and Customs Enforcement\nFreedom of Information Act Office\n500 12th Street, S.W., Stop 5009\nWashington, D.C. 20536-5009",
        "requests": [
          "All records related to ICE Agent Jonathan Ross: complete personnel file, employment history (Border Patrol 2007-2015, ICE 2015-present), training records, firearms instructor certifications.",
          "All prior use-of-force incidents, complaints, and disciplinary actions involving Agent Ross.",
          "Agent Ross's cellphone video recorded during the January 7, 2026 shooting.",
          "All body-worn camera and dashcam footage from all ICE agents present at the scene.",
          "All records related to the January 7, 2026 Minneapolis operation: planning documents, target lists, after-action reports.",
          "Current duty status and location of Agent Ross following this incident.",
          "All training records for Agent Jonathan Ross, including total hours of firearms training, de-escalation training, and use-of-force training completed during his tenure at Border Patrol (2007-2015) and ICE (2015-present)."
        ]
      },
      "dhs": {
        "name": "DHS",
        "fullName": "Department of Homeland Security",
        "description": "Secretary Noem made false public statements; blocking state investigation.",
        "email": null,
        "portal": "https://www.foia.gov/",
        "address": "Department of Homeland Security\nPrivacy Office, Mail Stop 0655\n2707 Martin Luther King Jr. Ave. SE\nWashington, D.C. 20528-0655",
        "requests": [
          "All records related to the ICE enforcement operation on January 7, 2026, in Minneapolis, during which Renee Nicole Good was killed.",
          "All records related to DHS Secretary Kristi Noem's public statements characterizing Good as engaged in 'domestic terrorism.'",
          "All communications between DHS leadership and White House regarding this incident and public messaging.",
          "All video footage in DHS possession, including Agent Ross's cellphone video.",
          "All communications between DHS, ICE, FBI, and DOJ regarding federal jurisdiction and exclusion of Minnesota BCA.",
          "All records related to ICE Agent Jonathan Ross: employment records, training, prior complaints, and current duty status.",
          "The autopsy report, medical examiner findings, and all forensic reports related to Renee Good's death."
        ]
      }
    },
    "complaints": {
      "dhs-oig": {
        "name": "DHS Inspector General",
        "description": "Report false statements by Secretary Noem, excessive force, and obstruction.",
        "email": "DHS-OIG.OfficePublicAffairs@oig.dhs.gov",
        "portal": "https://www.oig.dhs.gov/hotline",
        "address": "Department of Homeland Security\nOffice of Inspector General\n245 Murray Lane SW\nWashington, D.C. 20528",
        "subject": "Complaint: False Statements, Excessive Force, and Obstruction - Renee Good Shooting",
        "allegations": [
          "UNJUSTIFIED USE OF DEADLY FORCE: ICE Agent Jonathan Ross shot Renee Nicole Good, a U.S. citizen, three times. Multiple videos show she posed no threat—Ross was standing out of her vehicle's path when he fired. She had smiled and said 'I'm not mad at you' moments before being killed.",
          "FALSE PUBLIC STATEMENTS: DHS Secretary Kristi Noem falsely characterized Good as engaged in 'domestic terrorism' and claimed the agent acted in self-defense. Video evidence directly contradicts this—Minneapolis Mayor Frey called it 'bullshit.'",
          "OBSTRUCTION OF JUSTICE: Federal authorities reversed an agreement with Minnesota BCA for joint investigation, seized all evidence, and are blocking state investigators from accessing case materials.",
          "EVIDENCE SUPPRESSION: Agent Ross's cellphone video, his firearm, ammunition casings, and Good's vehicle are being withheld from state authorities."
        ],
        "actions": [
          "Investigate Agent Jonathan Ross's use of deadly force",
          "Investigate Secretary Noem's false public statements",
          "Investigate the decision to block state investigators",
          "Preserve all video footage, including Agent Ross's cellphone video",
          "Refer criminal conduct to appropriate authorities"
        ]
      },
      "doj-oig": {
        "name": "DOJ Inspector General",
        "description": "Report obstruction of state investigation and abuse of federal jurisdiction.",
        "email": "oig.hotline@usdoj.gov",
        "portal": "https://oig.justice.gov/hotline",
        "address": "Department of Justice\nOffice of the Inspector General\n950 Pennsylvania Avenue, NW\nSuite 4706\nWashington, D.C. 20530",
        "subject": "Complaint: Obstruction of Justice and Abuse of Federal Jurisdiction - Renee Good Case",
        "allegations": [
          "OBSTRUCTION OF STATE INVESTIGATION: U.S. Attorney's Office reversed agreement for joint FBI-BCA investigation, seizing exclusive jurisdiction and blocking Minnesota officials from all evidence access.",
          "IMPROPER IMMUNITY CLAIMS: Vice President Vance claimed federal agents have immunity from state prosecution. Minnesota AG Keith Ellison called this a 'misstatement of the law.'",
          "COORDINATION TO OBSTRUCT: Communications between DOJ, DHS, FBI, ICE, and White House may reveal improper coordination to prevent state investigation.",
          "CIVIL RIGHTS VIOLATIONS: A U.S. citizen was killed by a federal agent, and federal authorities are preventing independent investigation."
        ],
        "actions": [
          "Investigate DOJ's role in blocking state investigation",
          "Investigate the legal basis for immunity claims",
          "Investigate inter-agency communications regarding jurisdiction",
          "Preserve all records and evidence",
          "Refer criminal conduct to appropriate authorities"
        ]
      }
    },
    "congress": {
      "subject": "Request for Congressional Oversight - Killing of Renee Good by ICE Agent",
      "background": [
        "Renee Nicole Good, 37-year-old U.S. citizen, poet, and mother of three, was shot and killed by ICE Agent Jonathan Ross in Minneapolis on January 7, 2026, after dropping her 6-year-old son at school.",
        "Multiple videos show Good posed no threat. She smiled and said 'I'm not mad at you' moments before Ross fired three shots. Video shows Ross was standing out of her vehicle's path when he opened fire.",
        "DHS Secretary Kristi Noem called Good's actions 'domestic terrorism.' Minneapolis Mayor Frey called that claim 'bullshit.' Governor Walz proclaimed January 9 'Renee Good Day.'",
        "Federal authorities initially agreed to joint FBI-BCA investigation, then U.S. Attorney's Office 'reversed course' and seized exclusive jurisdiction.",
        "Minnesota BCA has been blocked from all evidence: Agent Ross's firearm, cellphone video, ammunition casings, and Good's vehicle.",
        "Rep. Robin Kelly (IL) filed articles of impeachment against DHS Secretary Noem on January 14, 2026."
      ],
      "concerns": [
        "A U.S. citizen was killed by a federal agent while posing no apparent threat",
        "Video evidence contradicts official government statements",
        "Federal government is actively blocking state investigation with lawful jurisdiction",
        "Evidence at risk of suppression or destruction",
        "High-level officials making false public statements about the incident"
      ],
      "actions": [
        "Enter this matter into the Congressional Record",
        "Initiate oversight hearings on the killing and federal obstruction",
        "Subpoena all video footage, including Agent Ross's cellphone video",
        "Request records from DHS, DOJ, FBI, and ICE",
        "Investigate DHS Secretary Noem's public statements",
        "Consider legislation requiring state access to evidence in federal agent shootings"
      ]
    }
  },
  "geraldo-lunas-campos": {
    "id": "geraldo-lunas-campos",
    "title": "Geraldo Lunas Campos Case",
    "date": "2026-01-16",
    "status": "active",
    "image": "images/geraldo-lunas-campos.jpg",
    "summary": "Geraldo Lunas Campos, 55, Cuban immigrant from Henrietta, NY, died January 3, 2026 at Camp East Montana ICE facility near El Paso, TX. Medical examiner ruled asphyxia from neck/chest compression — likely homicide. ICE claims he 'became disruptive while in line for medication' and was placed in segregation.",
    "keywords": ["ice", "detention", "texas", "el paso", "fort bliss", "homicide", "asphyxia", "geraldo lunas campos", "camp east montana", "henrietta", "rochester"],
    "sources": [
      {"name": "Washington Post", "url": "https://www.washingtonpost.com/immigration/2026/01/15/ice-detention-death-homicide/"},
      {"name": "NBC Miami", "url": "https://www.nbcmiami.com/news/local/ice-says-cuban-immigrant-died-while-attempting-suicide-a-witness-says-guards-pinned-and-choked-him/3750565/"},
      {"name": "Newsweek", "url": "https://www.newsweek.com/who-geraldo-lunas-campos-death-ice-custody-scrutiny-11372923"},
      {"name": "NewsNation", "url": "https://www.newsnationnow.com/us-news/southwest/report-death-at-camp-east-montana-could-be-ruled-a-homicide/"},
      {"name": "WHAM Rochester", "url": "https://13wham.com/news/local/man-arrested-in-rochester-new-york-henrietta-resident-dies-at-ice-facility-in-el-paso-texas-camp-east-montana-detention-facility-sex-offender-cuba-cuban-citizen-immigration-customs-border-patrol-homicide-investigation-washington-post"},
      {"name": "ACLU", "url": "https://www.aclu.org/press-releases/aclu-renews-calls-for-closure-of-camp-east-montana-following-reports-that-detained-immigrant-was-choked-to-death-by-ice-officer"}
    ],
    "agencies": {
      "doj": {
        "name": "DOJ",
        "fullName": "Department of Justice",
        "description": "Civil rights review and detention oversight.",
        "email": "MRUFOIA.Requests@usdoj.gov",
        "portal": "https://www.justice.gov/oip/submit-and-track-request-or-appeal",
        "address": "Department of Justice\nOffice of Information Policy\n6th Floor, 441 G Street, NW\nWashington, D.C. 20530",
        "requests": [
          "All records related to DOJ Civil Rights Division involvement in investigating the death of Geraldo Lunas Campos at Camp East Montana on January 3, 2026.",
          "All records related to civil rights review of this death, including any pattern-or-practice investigation of Camp East Montana or Acquisition Logistics LLC.",
          "All communications between DOJ, DHS, ICE, FBI, and the El Paso County Medical Examiner regarding this case.",
          "All records related to DOJ oversight of ICE detention facility contractors, specifically Acquisition Logistics LLC which operates Camp East Montana.",
          "All records related to the four immigrant deaths in ICE custody during the first ten days of January 2026, including any systemic review initiated.",
          "All records related to DOJ guidance on investigating deaths in federal custody where the medical examiner's findings contradict agency statements."
        ]
      },
      "fbi": {
        "name": "FBI",
        "fullName": "Federal Bureau of Investigation",
        "description": "FBI investigation into the death.",
        "email": null,
        "portal": "https://efoia.fbi.gov/",
        "address": "Federal Bureau of Investigation\nAttn: FOIA/PA Request\nRecord/Information Dissemination Section\n170 Marcel Drive\nWinchester, VA 22602",
        "requests": [
          "All records related to any FBI investigation into the death of Geraldo Lunas Campos, age 55, on January 3, 2026, at Camp East Montana ICE detention facility near El Paso, Texas.",
          "All records related to the El Paso County Medical Examiner's determination that the cause of death was asphyxia due to neck and chest compression, and the expected ruling of homicide.",
          "All communications between FBI, DHS, ICE, El Paso County Medical Examiner, and other agencies regarding this death.",
          "All witness statements collected, including from detainees present during the medication line incident and segregation placement.",
          "All records related to potential civil rights violations under 18 U.S.C. § 242 (Deprivation of Rights Under Color of Law).",
          "All records related to the discrepancy between DHS's initial claim of a 'suicide attempt' and the medical examiner's findings of asphyxia from compression."
        ]
      },
      "ice": {
        "name": "ICE",
        "fullName": "Immigration and Customs Enforcement",
        "description": "Detention records, guard conduct, and use-of-force reports.",
        "email": null,
        "portal": "https://www.ice.gov/foia",
        "address": "U.S. Immigration and Customs Enforcement\nFreedom of Information Act Office\n500 12th Street, S.W., Stop 5009\nWashington, D.C. 20536-5009",
        "requests": [
          "All records related to the death of Geraldo Lunas Campos, age 55, at Camp East Montana on January 3, 2026, including the complete A-file (alien file) for Lunas Campos.",
          "All records documenting the 'disruptive' behavior ICE claims occurred while Lunas Campos was in line for medication on January 3, 2026.",
          "All records related to Lunas Campos's placement in segregation, including authorization, duration, and conditions.",
          "All records identifying guards, medical staff, and other personnel involved in the January 3, 2026 incident, including their employment records, training certifications, prior complaints, and use-of-force history.",
          "All medical records for Lunas Campos during his detention, including intake screening, medication records, mental health evaluations, and medical response on January 3, 2026.",
          "All policies and training materials governing use of force, restraint techniques, and segregation at Camp East Montana and other ICE detention facilities.",
          "All records of prior deaths, serious injuries, or use-of-force incidents at Camp East Montana since it began operations.",
          "All records related to Lunas Campos's immigration case, including how and when he was taken into ICE custody and transferred to Camp East Montana.",
          "All training records for the guards involved in the January 3, 2026 incident, including total hours of restraint training, de-escalation training, positional asphyxia awareness training, and use-of-force training completed."
        ]
      },
      "dhs": {
        "name": "DHS",
        "fullName": "Department of Homeland Security",
        "description": "Facility oversight, contractor management, and incident records.",
        "email": null,
        "portal": "https://www.foia.gov/",
        "address": "Department of Homeland Security\nPrivacy Office, Mail Stop 0655\n2707 Martin Luther King Jr. Ave. SE\nWashington, D.C. 20528-0655",
        "requests": [
          "All records related to the death of Geraldo Lunas Campos, age 55, Cuban national and Henrietta, New York resident, on January 3, 2026, at Camp East Montana ICE detention facility near El Paso, Texas.",
          "All incident reports documenting the events of January 3, 2026, including ICE's claim that Lunas Campos 'became disruptive while in line for medication and refused to return to his assigned dorm.'",
          "All records related to the decision to place Lunas Campos in segregation on January 3, 2026, including who authorized this placement and the justification.",
          "All use-of-force reports, restraint logs, and after-action reports from January 3, 2026 involving Lunas Campos.",
          "All video footage, audio recordings, and body camera footage from January 3, 2026 at Camp East Montana, particularly footage of the medication line incident, segregation placement, and any physical altercation.",
          "All records related to Camp East Montana facility: contracts with Acquisition Logistics LLC, oversight reports, inspection records, staffing records, and prior complaints or incidents.",
          "All communications between DHS, ICE, and Acquisition Logistics LLC regarding Lunas Campos's death and the subsequent investigation.",
          "All records related to the deportation or transfer of witnesses to this death, including any detainees who were in the medication line or segregation area on January 3, 2026."
        ]
      }
    },
    "complaints": {
      "dhs-oig": {
        "name": "DHS Inspector General",
        "description": "Report misconduct, false statements, and conflicting official accounts.",
        "email": "DHS-OIG.OfficePublicAffairs@oig.dhs.gov",
        "portal": "https://www.oig.dhs.gov/hotline",
        "address": "Department of Homeland Security\nOffice of Inspector General\n245 Murray Lane SW\nWashington, D.C. 20528",
        "subject": "Complaint: Death of Geraldo Lunas Campos at Camp East Montana - Official Statements Contradict Medical Examiner",
        "allegations": [
          "DEATH BY ASPHYXIATION IN CUSTODY: Geraldo Lunas Campos, 55, Cuban national from Henrietta, NY, died January 3, 2026 at Camp East Montana ICE facility near El Paso, TX. El Paso County Medical Examiner determined cause of death was asphyxia due to neck and chest compression—manner of death expected to be ruled homicide.",
          "FALSE OFFICIAL STATEMENTS: ICE/DHS initially claimed Lunas Campos died during a 'suicide attempt.' This directly contradicts the medical examiner's finding that death resulted from external compression of the neck and chest, consistent with restraint, not self-harm.",
          "QUESTIONABLE CIRCUMSTANCES: ICE claims Lunas Campos 'became disruptive while in line for medication and refused to return to his assigned dorm' before being placed in segregation. He died the same day. The timeline and circumstances require investigation.",
          "WITNESS INTIMIDATION/OBSTRUCTION: Reports indicate ICE has moved to deport detainees who witnessed the incident, potentially destroying evidence and obstructing the investigation.",
          "CONTRACTOR NEGLIGENCE: Camp East Montana is operated by Acquisition Logistics LLC under a $1.2 billion contract, despite the company having no prior corrections or detention experience.",
          "PATTERN OF DEATHS: Four immigrants died in ICE custody in the first 10 days of January 2026, suggesting systemic failures in detention facility oversight."
        ],
        "actions": [
          "Immediately investigate the death of Geraldo Lunas Campos, including all events on January 3, 2026",
          "Investigate why DHS/ICE claimed suicide when the medical examiner found asphyxia from compression",
          "Investigate the decision to place Lunas Campos in segregation and what happened after",
          "Halt deportation of any witnesses to this death pending investigation",
          "Investigate Acquisition Logistics LLC's qualifications and DHS oversight of this contractor",
          "Preserve all video footage, incident reports, medical records, and communications",
          "Refer potential criminal violations to DOJ for prosecution"
        ]
      },
      "doj-oig": {
        "name": "DOJ Inspector General",
        "description": "Report civil rights violations and obstruction of justice.",
        "email": "oig.hotline@usdoj.gov",
        "portal": "https://oig.justice.gov/hotline",
        "address": "Department of Justice\nOffice of the Inspector General\n950 Pennsylvania Avenue, NW\nSuite 4706\nWashington, D.C. 20530",
        "subject": "Complaint: Civil Rights Violations - Death of Geraldo Lunas Campos in ICE Custody",
        "allegations": [
          "CIVIL RIGHTS VIOLATION - DEATH IN CUSTODY: Geraldo Lunas Campos, 55, died January 3, 2026 at Camp East Montana from asphyxia due to neck and chest compression (per El Paso County Medical Examiner). Death in federal custody from restraint-related asphyxiation constitutes potential violation of 18 U.S.C. § 242.",
          "FALSE STATEMENTS (18 U.S.C. § 1001): DHS/ICE officials claimed Lunas Campos died from a 'suicide attempt.' The medical examiner's finding of asphyxia from external compression directly contradicts this account. False official statements regarding a death in custody warrant criminal investigation.",
          "OBSTRUCTION OF JUSTICE (18 U.S.C. § 1512): Reports indicate ICE is deporting witnesses to this death. Removing witnesses from U.S. jurisdiction during an active homicide investigation constitutes potential obstruction.",
          "FAILURE OF DOJ OVERSIGHT: The FBI is reportedly investigating this death, yet DOJ has not ensured witness preservation or addressed the false statements made by DHS officials."
        ],
        "actions": [
          "Investigate civil rights violations in the death of Geraldo Lunas Campos",
          "Investigate false statements by DHS/ICE officials regarding cause of death",
          "Investigate whether deportation of witnesses constitutes obstruction of justice",
          "Coordinate with FBI to ensure proper investigation of this potential homicide",
          "Review DOJ oversight of ICE detention facilities and contractor accountability",
          "Preserve all records and refer criminal violations for prosecution"
        ]
      }
    },
    "congress": {
      "subject": "Request for Congressional Oversight - Death of Geraldo Lunas Campos in ICE Custody (Likely Homicide)",
      "background": [
        "Geraldo Lunas Campos, 55, Cuban national and Henrietta, New York resident, died January 3, 2026 at Camp East Montana, an ICE detention facility near El Paso, Texas.",
        "El Paso County Medical Examiner determined cause of death was asphyxia due to neck and chest compression. The manner of death is expected to be ruled homicide.",
        "ICE claims Lunas Campos 'became disruptive while in line for medication and refused to return to his assigned dorm' before being placed in segregation. He died the same day.",
        "DHS/ICE initially claimed Lunas Campos died during a 'suicide attempt'—directly contradicting the medical examiner's finding of death by external compression.",
        "Camp East Montana is operated by Acquisition Logistics LLC under a $1.2 billion contract, despite the company having no prior corrections or detention experience.",
        "Reports indicate ICE is deporting detainees who witnessed this death, potentially obstructing the FBI investigation.",
        "Four immigrants died in ICE custody in the first 10 days of January 2026."
      ],
      "concerns": [
        "A man died from asphyxiation consistent with restraint while in federal custody—the medical examiner expects to rule it homicide",
        "DHS/ICE made false public statements claiming suicide, contradicting medical examiner findings of death by compression",
        "ICE is reportedly deporting witnesses, which may constitute obstruction of a federal homicide investigation",
        "A company with no corrections experience received a $1.2 billion contract to operate detention facilities",
        "Pattern of deaths in ICE custody suggests systemic failures requiring immediate oversight"
      ],
      "actions": [
        "Enter this matter into the Congressional Record immediately",
        "Initiate emergency oversight hearings on this death and ICE detention facility conditions",
        "Issue a hold on deportation of any witnesses to this death pending investigation",
        "Subpoena all video footage, incident reports, and medical records from January 3, 2026",
        "Investigate how Acquisition Logistics LLC received a $1.2 billion detention contract with no corrections experience",
        "Request briefing from FBI on the status of the homicide investigation",
        "Demand explanation from DHS for the discrepancy between their 'suicide' claim and the medical examiner's findings",
        "Consider legislation requiring independent medical examiners and oversight for all deaths in federal custody"
      ]
    }
  },
  "keith-porter": {
    "id": "keith-porter",
    "title": "Keith Porter Case — ICE Agent Brian Palacios",
    "date": "2026-01-13",
    "status": "active",
    "image": "images/keith-porter.jpg",
    "summary": "Keith Porter Jr., 43, Black father of two, shot and killed by off-duty ICE Agent Brian Palacios on New Year's Eve in Northridge, LA. DHS claims 'active shooter' — neighbors say agent never identified himself. No bodycam. No charges filed.",
    "keywords": ["ice", "los angeles", "shooting", "off-duty", "northridge", "lapd", "keith porter", "brian palacios"],
    "sources": [
      {"name": "ABC7 Los Angeles", "url": "https://abc7.com/post/keith-porter-death-advocates-want-legal-action-man-shot-killed-off-duty-ice-agent-northridge/18359155/"},
      {"name": "Fox LA", "url": "https://www.foxla.com/news/ice-shooting-keith-porter-northridge"},
      {"name": "Capital & Main", "url": "https://capitalandmain.com/why-no-charges-friends-family-of-man-killed-by-off-duty-ice-officer-ask-after-new-years-eve-shooting"},
      {"name": "NewsOne", "url": "https://newsone.com/6755184/off-duty-ice-agent-killed-black-man-keith-porter-los-angeles/"},
      {"name": "KTLA", "url": "https://ktla.com/news/los-angeles-police-commission-grilled-about-fatal-ice-officer-involved-shooting-of-california-man/"},
      {"name": "TheGrio", "url": "https://thegrio.com/2026/01/16/court-documents-allegedly-reveal-ice-agent-keith-porter-jr/"}
    ],
    "agencies": {
      "doj": {
        "name": "DOJ",
        "fullName": "Department of Justice",
        "description": "Civil rights review and federal law enforcement oversight.",
        "email": "MRUFOIA.Requests@usdoj.gov",
        "portal": "https://www.justice.gov/oip/submit-and-track-request-or-appeal",
        "address": "Department of Justice\nOffice of Information Policy\n6th Floor, 441 G Street, NW\nWashington, D.C. 20530",
        "requests": [
          "All records related to DOJ involvement in the investigation of Keith Porter Jr.'s death.",
          "All records related to civil rights review of this shooting.",
          "All communications between DOJ, DHS, ICE, and local authorities regarding this case.",
          "All records related to DOJ policies on investigating off-duty federal law enforcement shootings.",
          "The autopsy report, medical examiner findings, and all forensic reports related to Keith Porter Jr.'s death."
        ]
      },
      "ice": {
        "name": "ICE",
        "fullName": "Immigration and Customs Enforcement",
        "description": "Agent records, training, and internal investigation.",
        "email": null,
        "portal": "https://www.ice.gov/foia",
        "address": "U.S. Immigration and Customs Enforcement\nFreedom of Information Act Office\n500 12th Street, S.W., Stop 5009\nWashington, D.C. 20536-5009",
        "requests": [
          "All records related to ICE Agent Brian Palacios, who shot and killed Keith Porter Jr. on December 31, 2025.",
          "All employment records, personnel files, training records, prior complaints, and use-of-force history for Agent Brian Palacios.",
          "All records from the Office of Professional Responsibility investigation into this shooting.",
          "All policies governing off-duty use of ICE-authorized firearms.",
          "All policies governing ICE agent response to non-immigration-related incidents.",
          "All records of Agent Palacios's current duty status following this incident.",
          "All training records for Agent Brian Palacios, including total hours of firearms training, de-escalation training, and use-of-force training completed."
        ]
      },
      "dhs": {
        "name": "DHS",
        "fullName": "Department of Homeland Security",
        "description": "Agent records, policies, and internal investigation.",
        "email": null,
        "portal": "https://www.foia.gov/",
        "address": "Department of Homeland Security\nPrivacy Office, Mail Stop 0655\n2707 Martin Luther King Jr. Ave. SE\nWashington, D.C. 20528-0655",
        "requests": [
          "All records related to the shooting death of Keith Porter Jr. on December 31, 2025, in Northridge, Los Angeles, by off-duty ICE Agent Brian Palacios.",
          "All records related to ICE Agent Brian Palacios, including employment records, training, prior complaints, disciplinary actions, and use-of-force history.",
          "All policies governing off-duty conduct of ICE agents, including use of service weapons.",
          "All communications between DHS, ICE, and LAPD regarding this incident.",
          "All records from ICE's Office of Professional Responsibility investigation.",
          "All public statements made by DHS officials regarding this incident.",
          "The autopsy report, medical examiner findings, and all forensic reports related to Keith Porter Jr.'s death."
        ]
      }
    },
    "complaints": {
      "dhs-oig": {
        "name": "DHS Inspector General",
        "description": "Report misconduct by off-duty ICE agent.",
        "email": "DHS-OIG.OfficePublicAffairs@oig.dhs.gov",
        "portal": "https://www.oig.dhs.gov/hotline",
        "address": "Department of Homeland Security\nOffice of Inspector General\n245 Murray Lane SW\nWashington, D.C. 20528",
        "subject": "Complaint: Off-Duty ICE Agent Shooting of Keith Porter Jr.",
        "allegations": [
          "UNJUSTIFIED USE OF DEADLY FORCE: Off-duty ICE agent shot and killed Keith Porter Jr. There is no bodycam footage, video evidence, or witness corroboration of the agent's claim that Porter pointed a weapon at him.",
          "FAILURE TO FOLLOW PROPER PROCEDURES: Rather than calling 911 and waiting for trained LAPD officers, the agent left his apartment with his service weapon to confront the situation.",
          "LACK OF ACCOUNTABILITY: Despite killing a man, the agent has not been arrested or charged.",
          "TRANSPARENCY CONCERNS: The agent's identity was not publicly released by DHS, only revealed through unrelated court documents."
        ],
        "actions": [
          "Investigate the shooting of Keith Porter Jr.",
          "Investigate whether the agent's use of force was justified",
          "Investigate why the agent confronted Porter rather than calling police",
          "Review policies on off-duty conduct and firearm use",
          "Preserve all evidence and records",
          "Refer findings to appropriate authorities"
        ]
      },
      "doj-oig": {
        "name": "DOJ Inspector General",
        "description": "Report civil rights violations and inadequate oversight.",
        "email": "oig.hotline@usdoj.gov",
        "portal": "https://oig.justice.gov/hotline",
        "address": "Department of Justice\nOffice of the Inspector General\n950 Pennsylvania Avenue, NW\nSuite 4706\nWashington, D.C. 20530",
        "subject": "Complaint: Civil Rights Concerns - Keith Porter Jr. Shooting",
        "allegations": [
          "POTENTIAL CIVIL RIGHTS VIOLATIONS: A Black man was killed by a federal agent with no independent evidence supporting the agent's account.",
          "INADEQUATE OVERSIGHT: DOJ has failed to ensure accountability for off-duty federal agents who use deadly force.",
          "LACK OF TRANSPARENCY: Federal agencies have not released information about the agent or investigation status."
        ],
        "actions": [
          "Investigate civil rights implications of this shooting",
          "Investigate DOJ oversight of off-duty federal law enforcement conduct",
          "Ensure independent review of the shooting",
          "Preserve all records"
        ]
      }
    },
    "congress": {
      "subject": "Request for Congressional Oversight - Keith Porter Jr. Shooting",
      "background": [
        "Keith Porter Jr., 43-year-old Black father, was shot and killed on New Year's Eve (December 31, 2025) by an off-duty ICE agent at an apartment complex in Northridge, Los Angeles.",
        "The ICE agent claims Porter pointed an AR-15 at him after celebratory gunfire.",
        "There is no bodycam footage, video evidence, or witnesses to confirm the agent's account.",
        "Neighbors report they did not hear the agent identify himself before shooting.",
        "The agent has not been arrested or charged. His identity was only revealed through unrelated court documents.",
        "Family and advocates are demanding transparency and accountability."
      ],
      "concerns": [
        "A Black man was killed by a federal agent with no corroborating evidence",
        "Off-duty agent chose to confront rather than call police",
        "No bodycam footage exists of the incident",
        "Agent has not been arrested or publicly identified by DHS",
        "Pattern of ICE agents using deadly force without accountability"
      ],
      "actions": [
        "Enter this matter into the Congressional Record",
        "Initiate oversight hearings on off-duty federal agent conduct",
        "Request records from DHS, ICE, and DOJ",
        "Investigate policies on off-duty use of force",
        "Consider legislation requiring bodycams for federal agents",
        "Ensure independent investigation of this shooting"
      ]
    }
  }
};
