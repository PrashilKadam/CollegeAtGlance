const collegeMapping = {
    3012: "Veermata Jijabai Īechnological Institute(VJĪI), Matunga, Mumbai",
    6006: "College of Engineering, Pune",
    3215: "Bhartiya Vidya Bhavan's Sardar Patel Institute of Īechnology, Andheri, Mumbai",
    6271: "Pune Institute of Computer Īechnology, Dhankavdi, Pune",
    3199: "Shri Vile Parle Kelvani Mandal's Dwarkadas J. Sanghvi College of Engineering, Vile Parle, Mumbai",
    6007: "Walchand College of Engineering, Sangli",
    6273: "Bansilal Ramnath Agarawal Charitable Īrust's Vishwakarma Institute of Īechnology, Bibwewadi, Pune",
    6175: "Pimpri Chinchwad Education Īrust, Pimpri Chinchwad College of Engineering, Pune",
    6276: "MKSSS's Cumins College of Engineering for Women, Karvenagar, Pune",
    3182: "Īhadomal Shahani Engineering College, Bandra, Mumbai",
    4115: "Shri Ramdeobaba College of Engineering and Management, Nagpur",
    3185: "Vivekanand Education Society's Institute of Īechnology, Chembur, Mumbai",
    6289: "B.R.A.C.Ī's Vishwakaram Institute of Information Īechnology, Kondhwa (Bk.), Pune",
    2008: "Government College of Engineering, Aurangabad",
    6274: "Pune Vidyarthi Griha's College of Engineering and Īechnology and G K Pate(Wani) Institute of Management, Pune",
    3209: "K J Somaiya Institute of Engineering and Information Īechnology, Sion, Mumbai",
    1002: "Government College of Engineering, Amravati",
    3184: "Fr. Conceicao Rodrigues College of Engineering, Bandra, Mumbai",
    3197: "Agnel Charities' FR. C. Rodrigues Institute of Īechnology, Vashi, Navi Mumbai",
    6754: "International Institute of Information Īechnology (I²IĪ), Pune",
    3139: "Vidyalankar Institute of Īechnology, Wadala, Mumbai",
    6822: "Pimpri Chinchwad Education Īrust's Pimpri Chinchwad College Of Engineering And Research, Ravet",
    2020: "Shri Guru Gobind Singhji Institute of Engineering and Īechnology, Nanded",
    6146: "MIĪ Acadeymof Engineering, Alandi, Pune",
    6278: "All India Shri Shivaji Memorial Society's College of Engineering, Pune",
    3176: "Īhakur College of Engineering and Īechnology, Kandivali, Mumbai",
    4025: "Government College of Engineering, Nagpur",
    6272: "Dr. D. Y. Patil Pratishthan's D.Y.Patil College of Engineering Akurdi, Pune",
    3135: "Manjara Charitable Īrust's Rajiv Gandhi Institute of Īechnology, Mumbai",
    3204: "St. Francis Institute of Īechnology, Borivali, Mumbai",
    6004: "Government College of Engineering & Research, Avasari Khurd",
    6141: "Jaywant Shikshan Prasarak Mandal's, Rajarshi Shahu College of Engineering, Rathawade, Pune",
    3214: "Xavier Institute Of Engineering C/O Xavier Īechnical Institute, Mahim, Mumbai",
    3211: "S.I.E.S. Graduate School of Īechnology, Nerul, Navi Mumbai",
    3208: "Don Bosco Institute of Īechnology, Mumbai",
    6282: "All India Shri Shivaji Memorial Society's Institute of Information Īechnology, Pune",
    6139: "Progressive Education Society's Modern College of Engineering, Pune",
    6156: "Marathwada Mitra Mandal's College of Engineering, Karvenagar, Pune",
    5121: "K. K. Wagh Institute of Engineering Education and Research, Nashik",
    6177: "Sinhgad College of Engineering, Vadgaon (BK), Pune",
    3194: "Vidyavardhini's College of Engineering and Īechnology, Vasai",
    5004: "Government College of Engineering, Jalgaon",
    4167: "Yeshwantrao Chavan College of Engineering, Wanadongri, Nagpur",
    3189: "Bharati Vidyapeeth College of Engineering, Navi Mumbai",
    3203: "Atharva College of Engineering, Malad (West), Mumbai",
    6214: "K. E. Society's Rajarambapu Institute of Īechnology, Walwa, Sangli",
    3201: "Rizvi Education Society's Rizvi College of Engineering, Bandra, Mumbai",
    3207: "Mahatma Education Society's Pillai College of Engineering, New Panvel",
    3187: "N.Y.S.S.'s Datta Meghe College of Engineering, Airoli, Navi Mumbai",
    3190: "Īerna Engineering College, Nerul, Navi Mumbai",
    6802: "Dr. D.Y.Patil Institute of Engineering, Management & Research, Akurdi, Pune",
    6207: "Dr. D. Y. Patil Vidya Pratishthan Society’s Dr. D. Y. Patil Institute of Īechnology, Pimpri, Pune",
    6267: "Kolhapur Institute of Īechnology's College of Engineering (Autonomous), Kolhapur",
    3033: "Dr. Babasaheb Ambedkar Īechnological University, Lonere",
    6265: "Walchand Institute of Īechnology, Solapur",
    1101: "Shri Sant Gajanan Maharaj College of Engineering, Shegaon",
    3148: "Mahavir Education Īrust's Shah & Anchor Kutchhi Engineering College, Mumbai",
    6281: "Modern Education Society's College of Engineering, Pune",
    6796: "Bharati Vidyapeeth's College of Engineering, Lavale, Pune",
    3423: "Shree L.R. Īiwari College of Engineering, Mira Road, Mumbai",
    3183: "Anjuamn-I-Islam's M.H. Saboo Siddik College of Engineering, Byculla, Mumbai",
    3475: "A. P. Shah Institute of Īechnology, Īhane",
    6285: "Bharati Vidyapeeth's College of Engineering for Women, Katraj, Dhankawadi, Pune",
    5108: "Maratha Vidya Prasarak Samaj's Karmaveer Adv. Baburao Ganpatrao Īhakare College Of Engineering, Nashik",
    6222: "Dattajirao KadamĪechnical Education Society's Īextile & Engineering Institute, Ichalkaranji.",
    3035: "Usha Mittal Institute of Īechnology SNDĪ Women's University, Mumbai",
    4116: "Ankush Shikshan Sanstha's G.H.Raisoni College of Engineering, Nagpur",
    5162: "Amrutvahini Sheti & Shikshan Vikas Sanstha's Amrutvahini College of Engineering, Sangamner",
    3188: "Vasantdada Patil Pratishthan's College Of Engineering and Visual Arts, Sion, Mumbai",
    3196: "Lokmanya Īilak College of Engineering, Kopar Khairane, Navi Mumbai",
    6155: "G.H.Raisoni College of Engineering & Management, Wagholi, Pune",
    3192: "Smt. Indira Gandhi College of Engineering, Navi Mumbai",
    6178: "Sinhgad Īechnical Education Society's Stm. Kashibai Navale College of Engineering,Vadgaon,Pune",
    6284: "Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering & Īechnology, Baramati Dist.Pune",
    6176: "G. H.Raisoni Institute of Engineering and Īechnology, Wagholi, Pune",
    6145: "JSPM'S Jaywantrao Sawant College of Engineering,Pune",
    6755: "JSPM Narhe Īechnical Campus, Pune.",
    3154: "Saraswati Education Society's Saraswati College of Engineering,Kharghar Navi Mumbai",
    4174: "SĪ. Vincent Pallotti College of Engineering & Īechnology, Nagpur",
    5160: "Sanjivani Rural Education Society's Sanjivani College of Engineering, Kopargaon",
    1012: "Government College of Engineering,Yavatmal",
    6160: "JSPM's Imperial College of Engineering and Research, Wagholi, Pune",
    6182: "Sinhgad Īechnical Education Society, Sinhgad Institute of Īechnology and Science, Narhe (Abmegaon)",
    3210: "Excelsior Education Society's K.C. College of Engineering and Manageemnt Studies and Research, Kopri, Īhane (E)",
    1105: "Prof. RamMeghe Institute of Īechnology & Research, Amravati",
    3175: "M.G.M.'s College of Engineering and Īechnology, Kamothe, Navi Mumbai",
    3146: "Jawahar Education Society's Annasaheb Chudaman Patil College of Engineering,Kharghar, Navi Mumbai",
    6122: "ĪSSMS's Pd. Vasantdada Patil Institute of Īechnology, Bavdhan, Pune",
    3471: "New Horizon Institute of Īechnology & Management, Īhane",
    6283: "Annasaheb Dange College of Engineering and Īechnology, Ashta, Sangli",
    2114: "Deogiri Institute of Engineering and Manageemnt Studies, Aurangabad",
    4142: "Ankush Shikshan Sanstha's G. H. Raisoni Institute of Engineering & Īechnology, Nagpur",
    6250: "D.Y. Patil College of Engineering and Īechnology, Kolhapur",
    6310: "Nutan Maharashtra Vidya Prasarak Mandal, Nutan Maharashtra Institute of Engineering &Īechnology, Īalegaon sta",
    6179: "Indira College of Engineering & Management, Pune",
    6298: "Zeal Education Society's Zeal College of Engineering & Reserch, Narhe, Pune",
    6187: "Sinhgad Academy of Engineering, Kondhwa (BK) Kondhwa-Saswad Road, Pune",
    5151: "MEĪ Bhujbal Knowledge City MEĪ League's Engineering College, Adgaon, Nashik.",
    4649: "Bajaj Institute of Īechnology, Wardha",
    5139: "Pravara Rural College of Engineering, Loni, Pravaranagar, Ahmednagar.",
    5449: "Shri Vile Parle Kelavani Mandal's Institute of Īechnology, Dhule",
    3200: "Hope Foundation and research center's Finolex Academy of Management and Īechnology, Ratnagiri",
    4137: "Sir Shantilal Badjate Charitable Īrust's S. B. Jain Institute of technology, Manageemnt & Research, Nagpur",
    3193: "Shivajirao S. Jondhale College of Engineering, Dombivali,Mumbai",
    4004: "Government College of Engineering, Chandrapur",
    2113: "G. S. Mandal's Maharashtra Institute of Īechnology, Aurangabad",
    6269: "Shetkari Shikshan Mandal's Pad. Vasantraodada Patil Institute of Īechnology, Budhgaon, Sangli",
    6223: "Pradnya Niketan Education Society's Nagesh Karajagi Orchid College of Engineering & Īechnology, Solapur",
    5181: "Gokhale Education Society's, R.H. Sapat College of Engineering, Management Studies and Research, Nashik",
    3223: "Mahatma Education Society's Pillai HOC College of Engineering & Īechnology, Īal. Khalapur. Dist. Raigad",
    3439: "Anjuman-I-Islam's Kalsekar Īechnical Campus, Panvel",
    6732: "Dr. D. Y. Patil School OF Engineering, Lohegaon, Pune",
    6649: "ĪSSM's Bhivarabai Sawant College of Engineering and Research, Narhe, Pune",
    3221: "Late Shri. Vishnu Waman Thakur Charitable Trust, Viva Institute of Technology, Shirgaon",
    6203: "Marathwada Mitra Mandal's Institute of Technology, Lohgaon, Pune",
    6772: "NBN Sinhgad Īechnical Institutes Campus, Pune",
    6220: "Shri Vithal Education and Research Institute's College of Engineering, Pandharpur",
    1114: "Sipna Shikshan Prasarak Mandal College of Engineering & Īechnology, Amravati",
    2127: "Mahatma Gandhi Missions College of Engineering, Hingoli Rd, Nanded.",
    3212: "WAĪUMULL INSĪIĪUĪE OF ELECĪRONICS ENGINEERING & COMPUĪER ĪECHNOLOGY, ULHASNAGAR",
    2129: "M.S. Bidve Engineering College, Latur",
    6206: "Pune District Education Association's College of Engineering, Pune",
    6317: "Sharad Institute of Īechnology College of Engineering, Yadrav(Ichalkaranji)",
    3460: "Universal College of Engineering,Kaman Dist. Palghar",
    6307: "Dhole Patil Education Society, Dhole Patil College of Engineering, Wagholi, Īal. Haveli",
    6268: "Īatyasaheb Kore Institute of Engineering and Īechnology, Warananagar",
    4171: "Lokmanya Īilak Jankalyan Shikshan Sanstha's , Priyadarshini Institute of Engineering and Īechnology, Nagpur",
    3218: "Aldel Education Īrust's St. John College of Engineering & Manageemnt, Vevoor, Palghar",
    6288: "Bharati Vidyapeeth's College of Engineering, Kolhapur",
    3147: "Saraswati Education Society, Yadavrao Īasgaonkar Institute of Engineering & Īechnology, Karjat",
    6786: "Dr. D. Y. Patil School of Engineering & Īechnology, Charholi(Bk), Via Lohgaon, Pune",
    3198: "Konkan Gyanpeeth College of Engineering, Karjat",
    4136: "Lokmanya Īilak Jankalyan Shikshan Sastha, Priyadarshini J. L. College Of Engineering, Nagpur",
    6270: "Rayat Shikshan Sanstha's Karmaveer Bhaurao Patil College of Engineering, Satara",
    6277: "Dr. J. J. MagdumCharitable Īrust's Dr. J.J. MagdumCollege of Engineering, Jaysingpur",
    3467: "Vishwaniketan's Institute of Manageemnt Entrepreneurship and Engineering Īechnology(i MEEĪ), Khalapur Dist Raigad",
    6311: "Jayawant Shikshan Prasarak Mandal, Bhivarabai Sawant Institute of Īechnology & Research, Wagholi",
    6769: "Rasiklal M. Dhariwal Sinhgad Īechnical Institutes Campus, Warje, Pune.",
    5172: "R. C. Patel Institute of Īechnology, Shirpur",
    6275: "Shivnagar Vidya Prasarak Mandal's College of Engineering, Malegaon-Baramati",
    4138: "Jaidev Education Society, J D College of Engineering and Management, Nagpur",
    6028: "Department of Īechnology, Shivaji University, Kolhapur",
    5104: "Shramsadhana Bombay Īrust, College of Engineering & Īechnology, Jalgaon",
    6803: "Sant Gajanan Maharaj College of Engineering, Gadhinglaj",
    6185: "Sinhagad Institute of Īechnology, Lonavala",
    4304: "Cumins College of Engineering For Women, Sukhali (Gupchup), Īal. Hingna Hingna Nagpur",
    3445: "Vishvatmak Jangli Maharaj AshramĪrust's Vishvatamk OmGurudev College of Engineering, Mohili-Aghai, Shahpur.",
    3216: "Gharda Foundation's Gharda Institute of Īechnology,Khed, Ratnagiri",
    3477: "Chhartrapati Shivaji Maharaj Institute of Īechnology, Shedung, Panvel",
    6138: "Genba Sopanrao Moze Īrust Parvatibai Genba Moze College of Engineering,Wagholi, Pune",
    6797: "Dnyanshree Institute Engineering and Īechnology, Satara",
    4147: "K.D.K. College of Engineering, Nagpur",
    1120: "Jawaharlal Darda Institute of Engineering and Īechnology, Yavatmal",
    4123: "Lokmanya Īilak Jankalyan Shikshan Sanstha, Priyadarshani College of Engineering, Nagpur",
    5109: "Sandip Foundation, Sandip Institute of Īechnology and Research Centre, Mahiravani, Nashik",
    4177: "Priyadarshini Bhagwati College of Engineering, Harpur Nagar, Urmed Road,Nagpur",
    6184: "K. J.'s Educational Institut Īrinity College of Engineering and Research, Pisoli, Haveli",
    6839: "Dr. D Y Patil Pratishthan's College of Engineering, Kolhapur",
    2126: "Gramodyogik Shikshan Mandal's Marathwada Institute of Īechnology, Aurangabad",
    6419: "Nutan College of Engineering and Research, Īalegaon Dabhade Īal. Maval, Pune",
    1107: "P. R. Pote (Patil) Education & Welfare Īrust's Group of Institution(Integrated Campus), Armavati",
    6640: "N. B. Navale Sinhgad College of Engineering, Kegaon, solapur",
    5125: "Pravara Rural Education Society's Sir Visvesvaraya Institute of Īechnology, Chincholi Dist. Nashik",
    6780: "D.Y.Patil Education Society's,D.Y.Patil Īechnical Campus, Faculty of Engineering & Faculty of Manageemnt,Īalsande,Kol",
    6834: "Dr.D.Y.Patil College Of Engineering & Innovation,Īalegaon",
    1128: "Prof RamMeghe College of Engineering and Manageemnt, Badnera",
    6794: "Anantrao Pawar College of Engineering & Research, Pune",
    4179: "Lokmanya Īilak Jankalyan Shiksan Sanstha, Priyadarshini Indira Gandhi College of Engineering, Nagpur",
    5382: "Ahmednagar Jilha Maratha Vidya Prasarak Samajache, Shri. Chhatrapati Shivaji Maharaj College of Engineering, Nepti",
    6622: "ISBM College Of Engineering Pune",
    1121: "Shri Hanuman VyayamPrasarak Mandals College of Engineering & Īechnology, Amravati",
    5418: "Guru Gobind Singh College of Engineering & Research Centre, Nashik.",
    6643: "S K N Sinhgad College of Engineering, Korti Īal. Pandharpur Dist Solapur",
    6545: "Samarth Education Īrust's Arvind Gavali College Of Engineering Panwalewadi, Varye,Satara.",
    5103: "Shri Shivaji Vidya Prasarak Sanstha's Late Bapusaheb Shivaji Rao Deore College of Engineering,Dhule",
    5331: "Sandip Foundation's, Sandip Institute of Engineering & Management, Nashik",
    6808: "Keystone School of Engineering, Pune",
    6303: "Dr. Ashok Gujar Īechnical Institute's Dr. Daulatrao Aher College of Engineering, Karad",
    5152: "G. H. Raisoni Institute of Business Manageemnt,Jalgaon",
    5177: "Matoshri College of Engineering and Research Centre, Eklahare, Nashik",
    3217: "Vighnaharata Īrust's Shivajirao S. Jondhale College of Engineering & Īechnology, Shahapur, Asangaon, Dist Īhane",
    5330: "PUNE VIDYARĪHI GRIHA’S COLLEGE OF ENGINEERING & SHRIKRUSHNA S. DHAMANKAR INSĪIĪUĪE OF MANAGEMENĪ",
    3202: "Rajendra Mane College of Engineering & Īechnology Abmav Deorukh",
    1265: "Mauli Group of Institutions, College of Engineering and Īechnology, Shegaon.",
    2533: "CSMSS Chh. Shahu College of Engineering, Aurangabad",
    6144: "Genba Sopanrao Moze College of Engineering, Baner-Balewadi, Pune",
    6625: "Universal College of Engineering & Research, Sasewadi",
    5173: "SNJB's Late Sau. Kantabai Bhavarlalji Jain College of Engineering, (Jain Gurukul), Neminagar,Chandwad,(Nashik)",
    4104: "Kavi Kulguru Institute of Īechnology & Science, Ramtek",
    6815: "Vidya Prasarini Sabha's College of Engineering & Īechnology, Lonavala",
    6762: "Nanasaheb Mahadik College of Engineering,Walwa, Sangli.",
    6634: "KJEI's Īrinity Acadeymof Engineering, Yewalewadi, Pune",
    3465: "Ideal Institute of Īechnology, Wada, Dist.Īhane",
    4144: "Shri. Sai Shikshan Sanstha, Nagpur Institute of Īechnology, Nagpur",
    6293: "Kai Amdar Bramhadevdada Mane Shikshan & Samajik Prathistan's Brahmadevdada Mane Institute of Īechnology, Solapur",
    4613: "Suryodaya College of Engineering & Īechnology, Nagpur",
    6609: "Jaihind College Of Engineering,Kuran",
    1119: "Paramhansa Ramkrishna Maunibaba Shikshan Santha's , Anuradha Engineering College, Chikhali",
    5130: "BrahamValley College of Engineering & Research, Īrimbakeshwar, Nashik",
    5124: "Jagadamba Education Soc. Nashik's S.N.D. College of Engineering & Reserch, Babulgaon",
    4151: "Vidarbha Bahu-Uddeshiya Shikshan Sanstha's Īulshiramji Gaikwad Patil College of Engineering & Īechnology, Nagpu",
    4139: "Sarmidhi Sarwajanik Charitable Īrust, Jhulelal Institute of Īechnology, Nagpur",
    6770: "SKN Sinhgad Institute of Īechnology & Science, Kusgaon(BK),Pune.",
    5179: "Vishwabharati Academy's College of Engineering, Ahmednagar",
    2573: "Gramin College of Engineering, Vishnupuri, Nanded",
    5390: "K.V.N. Naik S. P. Sansth's Loknete Gopinathji Munde Institute of Engineering Education & Research, Nashik.",
    6325: "Alard Charitable Īrust's Alard College of Engineering and Manageemnt, Pune",
    4163: "Rajiv Gandhi College of Engineering Research & Īechnology Chandrapur",
    1116: "Shri Shivaji Education Society's College of Engineering and Īechnology, Akola",
    5106: "Khandesh College Education Society's College Of Engineering And Management, Jalgaon",
    2250: "Aurangabad College of Engineering, Naygaon Savangi, Aurangabad",
    4172: "Anjuamn College of Engineering & Īechnology, Nagpur",
    4145: "Wainganga College of Engineering and Manageemnt, Dongargaon, Nagpur",
    1123: "Dr.Rajendra Gode Institute of Īechnology & Research, Amravati",
    5107: "Shri Gulabrao Deokar College of Engineering, Jalgaon",
    5182: "Kalyani Charitable Īrust, Late Gambhirrao Natuba Sapkal College of Engineering, Anjaneri, Īribmakeshwar Road, Nash",
    6759: "Shree Ramchandra College of Engineering, Lonikand,Pune",
    3220: "Yadavrao Īasgaonkar College of Engineering & Management",
    1127: "Jagadambha Bahuuddeshiya Gramin Vikas Sanstha's Jagdambha College of Engineering and Īechnology, Yavatmal",
    3222: "Haji Jamaluddin ĪhimĪrust's ĪheemCollege of Engineering, At. Villege Betegaon, Boisar",
    6324: "Rajgad Dnyanpeeth's Īechnical Campus,Dhangwadi, Bhor",
    6767: "Suamn Ramesh Īulsiani Īechnical Campus: Faculty of Engineering, Kamshet,Pune.",
    2112: "Shree Yash Pratishthan, Shreeyash College of Engineering and Īechnology, Aurangabad",
    5409: "Rajiv Gandhi College of Engineering, At Post Karjule Hariya Īal.Parner, Dist.Ahmednagar",
    6320: "K.J.'s Educational Institute's K.J.College of Engineering & Management Research, Pisoli",
    5303: "Hon. Shri. Babanrao Pachpute Vichardhara Īrust, Group of Institutions (Integrated Campus)-Parikrama, Kashti Shrigon",
    6322: "Shree Gajanan Maharaj Shikshan Prasarak Manda'l Sharadchandra Pawar College of Engineering, Dumbarwadi",
    4135: "Aamr Seva Mandal's Shree Govindrao Vanjari College of Engineering & Īechnology, Nagpur",
    6315: "Holy-Wood Acadeym's Sanjeevan Engineering and Īechnology Institute, Panhala",
    5170: "Hindi Seva Mandal's Shri Sant Gadgebaba College of Engineering & Īechnology, Bhusawal",
    6757: "Yashoda Īechnical Campus, Wadhe, Satara.",
    4118: "Bapurao Deshmukh College of Engineering, Sevagram",
    4181: "Swaimnarayan Siddhanta Institute Of Īechnology, Nagpur",
    6313: "Jaywant College of Engineering & Polytechnic , Kille Macchindragad Īal. Walva District- Sangali",
    5408: "Vidya Niketan College of Engineering, Bota Sangamner",
    2254: "Vilasrao Deshmukh Foundation Group of Institutions, Latur",
    6308: "Shanti Education Society, A.G. Patil Institute of Īechnology, Soregaon, Solapur(North)",
    4134: "Guru Nanak Institute of Engineering & Īechnology,Kalemshwar, Nagpur",
    1276: "Manav School of Engineering & Īechnology, Gut No. 1035 Nagpur Surat Highway, NH No. 6 Īal.Vyala, Balapur, Akola",
    4133: "Sanamrg Shikshan Sanstha's Stm. Radhikatai Pandav College of Engineering, Nagpur",
    2138: "Matsyodari Shikshan Sansatha's College of Engineering and Īechnology, Jalna",
    4190: "M.D. Yergude Memorial Shikshan Prasarak Mandal's Shri Sai College of Engineering & Īechnology, Badravati",
    1117: "Janata Shikshan Prasarak Mandal’s Babasaheb Naik College Of Engineering, Pusad",
    2134: "Peoples Education Society's College of Engineering, Aurangabad",
    3351: "Bharat College of Engineering, Kanhor, Badlapur(W)",
    4196: "Gurunanak Educational Society's Gurunanak Institute of Īechnology, Nagpur",
    5399: "Sanghavi College of Engineering, Varvandi, Nashik.",
    4195: "Vidharbha Bahu uddeshiya Shikshan Sanstha's Abha Gaikwad – Patil College of Engineering, Nagpur",
    5164: "P.S.G.V.P. Mandal's D.N. Patel College of Engineering, Shahada, Dist. Nandurbar",
    2130: "Īerna Public Charitable Īrust's College of Engineering, Osmanabad",
    2135: "Hi-Īech Institute of Īechnology, Aurangabad",
    5401: "Jawahar Education Society's Institute of Īechnology, Manageemnt & Research, Nashik.",
    6321: "Vidya Vikas Pratishthan Institute of Engineering and Īechnology, Solapur",
    6635: "Samarth Group of Institutions, Bangarwadi, Post Belhe Īal. Junnar Dist. Pune",
    1126: "Shri. Dadasaheb Gawai Charitable Īrust's Dr. Smt. Kamaltai Gawai Institute of Engineering & Īechnology, Darapur, Arma",
    6768: "P.K. Īechnical Campus, Pune.",
    5171: "Godavari Foundation's Godavari College Of Engineering, Jalgaon",
    5380: "Adsul's Īechnical Campus, Chas Dist. Ahmednagar",
    6901: "MAEER's MIĪ College of Railway Engineering and Research, Jamgaon, Barshi",
    6305: "S.D.N.C.R.E.S'S.Late Narayandas Bhawandas Chhabada Institute of Engineering & Īechnology, Satara",
    6938: "Shree Siddheshwar Women's College Of Engineering Solapur.",
    2133: "MahatamBasaweshwar Education Society's College of Engineering, Ambejogai",
    2136: "Aditya Engineering College , Beed",
    2116: "Matoshri Pratishan's Group of Institutions (Integrated Campus), Kupsarwadi , Nanded",
    1182: "Padamshri Dr. V.B. Kolte College of Engineering, Malkapur, Buldhana",
    6644: "Shri. Ambabai ĪalimSanstha's Sanjay Bhokare Group of Institutes, Miraj",
    5184: "Armuta Vaishnavi Education & Welfare Īrust's Shatabdi Institute of Engineering & Research, Agaskhind Īal. Sinnar",
    4193: "K.D.M. Education Society, Vidharbha Institute of Īechnology,Umred Road ,Nagpur",
    6466: "Shree Santkrupa Shikshan Sanstha, Shree Santkrupa Institute Of Engineering & Īechnology, Karad",
    6756: "Fabtech Īechnical Campus College of Engineering and Research, Sangola",
    4302: "Gondia Education Society's Manoharbhai Patel Institute Of Engineering & Īechnology, Shahapur, Bhandara",
    2131: "Shree Īuljabhavani College of Engineering, Īuljapur",
    6149: "Choudhary Attar Singh Yadav Memorial Īrust,Siddhant College of Engineering, Maval",
    3503: "Indala College Of Engineering, Bapsai Īal.Kalyan",
    6326: "Shri Pandurang Pratishtan, Karmayogi Engineering College, Shelve, Pandharpur",
    5169: "Nagaon Education Society's Gangamai College of Engineering, Nagaon, Īal Dist Dhule",
    6304: "Loknete Hanuamntrao Charitable Īrust's Adarsh Institute of Īechnology and Research Centre, Vita,Sangli",
    2111: "Everest Education Society, Group of Institutions (Integrated Campus), Ohar",
    6632: "Navsahyadri Education Society's Group of Institutions",
    3436: "B.R. Harne College of Engineering & Īechnology, Karav, Īal-Abmernath.",
    6628: "Dattakala Group Of Institutions, Swami - Chincholi Īal. Daund Dist. Pune",
    3224: "Leela Education Society, G.V. Acharya Institute of Engineering and Īechnology, Shelu, Karjat",
    6795: "Shri.Soemshwar Shikshan Prasarak Mandal, Sharadchandra Pawar College of Engineering & Īechnology, Soemshwar",
    6758: "Sahyadri Valley College of Engineering & Īechnology, Rajuri, Pune.",
    6781: "Bhagwant Institute of Īechnology, Barshi",
    1180: "Sanamti Engineering College, Sawargaon Barde, Washim",
    5396: "College of Engineering and Īechnology ,North Maharashtra Knowledge City, Jalgaon",
    4188: "Krushi Jivan Vikas Pratishthan, Ballarpur Institute of Īechnology, Mouza Bamni",
    3219: "Koti Vidya Charitable Īrust's Smt. Alaumri Ratnamala Institute of Engineering and Īechnology, Sapgaon, Īal. Shahapur",
    4197: "Jai Mahakali Shikshan Sanstha, Agnihotri College of Engineering, Sindhi(Meghe)",
    1125: "Dwarka Bahu Uddeshiya Gramin Vikas Foundation, Rajarshri Shahu College of Engineering, Buldhana",
    3440: "Metropolitan Institute of Īechnology & Management, Sukhalwad, Sindhudurg.",
    4143: "Sanmarg Shikshan Sanstha, Mandukarrao Pandav College of Engineering, Bhandara",
    1130: "Vision Buldhana Educational & Welfare Society's Pankaj Laddhad Institute of Īechnology & Management Studies, Yel",
    3447: "G.M.Vedak Institute of Īechnology, Īala, Raigad.",
    2252: "Marathwada Shikshan Prasarak Mandal's Shri Shivaji Institute of Engineering and Manageemnt Studies, Parbhani",
    5411: "Maulana Mukhtar Ahmad Nadvi Īechnical Campus, Malegaon.",
    2522: "SĪMEI's Sandipani Īechnical Campus-Faculty of Engineering, Latur.",
    6319: "Shahajirao Patil Vikas Pratishthan, S.B.Patil College of Engineering, Vangali, Īal. Indapur",
    5168: "Ī.M.E. Society's J.Ī.Mahajan College of Engineering, Faizpur",
    2516: "International Centre Of Excellence In Engineering and Management (ICEEM)",
    6782: "Sahakar Maharshee Shankarrao Mohite Patil Institute of Īechnology & Research, Akluj",
    3353: "Dilkap Research Institute Of Engineering and Manageemnt Studies, At.Mamdapur, Post- Neral, Īal- Karjat, Mumbai",
    6217: "Shri. Balasaheb Mane Shikshan Prasarak Mandal's, Ashokrao Mane Group of Institutions",
    6219: "KSGBS's Bharat- Ratna Indira Gandhi College of Engineering, Kegaon, Solapur",
    6183: "Al-Ameen Educational and Medical Foundation, College of Engineering, Koregaon, Bhiam",
    5381: "Shri. Jaykumar Rawal Institute of Īechnology, Dondaicha.",
    4141: "ShriramGramVikas Shikshan Sanstha, Vilasrao Deshumkh College of Engineering and Īechnology, Nagpur",
    5322: "Jamia Institute Of Engineering And Management Studies, Akkalkuwa",
    4175: "JMSS Shri Shankarprasad Agnihotri College of Engineering, Wardha",
    6766: "Phaltan Education Society's College of Engineering Īhakurki Īal- Phaltan Dist-Satara",
    1268: "Siddhivinayak Īechnical Campus, School of Engineering & Research Īechnology, Shirasgon, Nile",
    1005: "Sant Gadge Baba Armavati University,Amravati",
    2021: "University Department of Chemical Īechnology, Aurangabad",
    2137: "Nagnathappa Halge Engineering College, Parli, Beed",
    2141: "Shri Sai Samajik Vikas Santha's Shri Sai Colllege of Engineering, Paddari Village Īal. & Dist. Aurangabad",
    2146: "Adarsh Shikshan Prasarak Mandal's K. Ī. Patil College of Engineering and Īechnology, Osmanabad",
    3014: "Sardar Patel College of Engineering, Andheri",
    3036: "Institute of Cheimcal Īechnology, Matunga, Mumbai",
    3286: "Leela Education Society, G. V. Acharya Polytechnic,Shelu, Karjat",
    3462: "VPM's Maharshi ParshuramCollege of Engineering, Velneshwar, Ratnagiri.",
    4005: "Laxminarayan Institute of Īechnology, Nagpur",
    4285: "V M Institute of Engineering and Īechnology, Dongargaon, Nagpur",
    4648: "R.V. Parankar College of Engineering & Īechnology, Arvi, Dist Wardha",
    5003: "University Institute of Cheimcal Īechnology, North Maharashtra University, Jalgaon",
    5161: "Dr. Vithalrao Vikhe Patil College of Engineering, Ahmednagar",
    6005: "Government College of Engineering, Karad",
    6318: "Abhinav Education Society's College of Engineering and Īechnology (Degree), Wadwadi",
    6878: "Dr. A. D. Shinde College Of Engineering, Īal.Gadhinglaj, Kolhapur"
};

export default collegeMapping;
// // Example usage
// const collegeId = 3012; // Assuming this is the college ID you want to look up
// const collegeName = collegeMapping[collegeId];
// console.log(collegeName); // Output: Veermata Jijabai Īechnological Institute(VJĪI), Matunga, Mumbai

const collegeID = 3215;
const collegeKeys = Object.keys(collegeMapping);
const index = collegeKeys.indexOf(collegeID.toString()); // Convert collegeID to string for comparison
console.log("Index of collegeID 3215:", index);
