import { v4 as uuid } from "uuid";
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    _id: "265487c4-d75f-4d9b-bf51-9fdd65320c4f",
    title: "Smriti Mandhana",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    creator: "Anand Kumar Gautam",
    videoId: "BCOXL3SGb1U",
    image: "https://wallpapercave.com/wp/wp5297135.jpg",
    id: "1"
  },
  {
    _id: "fc1cc9ab-88f9-49e4-999e-2e64335576d3",
    title: "Mahendra Singh Dhoni",
    creator: "Anand Kumar Gautam",
    videoId: "8bAzfT0dDGY",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://www.hdimages.pics/images/quotes/english/general/ms-dhoni-hd-picture-52650-312806.jpg",
    id: "2"
  },
  {
    _id: "6b50d589-b1bd-4947-804e-d5c6ee9c1503",
    title: "Mahendra Singh Dhoni",
    creator: "Anand Kumar Gautam",
    videoId: "8mlLIicvQYA",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://i.pinimg.com/originals/ee/e5/97/eee5972109eddf15c205a577e1080ce2.jpg",
    id: "3"
  },
  {
    _id: "6b50d589-b1bd-4947-804e-d5c6ee9c1503",
    title: "Surya Kumar Yadav",
    creator: "Anand Kumar Gautam",
    videoId: "8S5lApwP3yo",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://resources.pulse.icc-cricket.com/ICC/photo/2022/11/02/e65f05f6-56f8-433e-b897-357a6a8ba285/UoT7ZD3l.jpg",
    id: "3"
  },
  {
    _id: "0de606af-19ef-4fcf-91d2-f3e8a71258b3",
    title: "Virat Kohli",
    creator: "Anand Kumar Gautam",
    videoId: "mVupXkSH4sQ",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://www.mykhel.com/img/2018/10/viratkohli-cropped_enb1383spzof1285xkhtckgld.jpg",
    id: "4"
  },
  {
    _id: "YRB5anm3V3o",
    title: "Shubhaman Gill",
    videoId: "NfJnQgM8FiE",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    creator: "Anand kumar Gautam",
    image: "https://www.insidesport.in/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-18-at-6.17.23-PM.jpeg?w=809",
    id: "5"
  },
  {
    _id: "b0fb38a0-0b5c-4a57-9fa8-0e8ed6d0086e",
    title: "Ishan Kishan",
    creator: "Anand Kumar Gautam",
    videoId: "-CoTnFNSfG8",
    description: "https://assets.telegraphindia.com/telegraph/2020/Nov/1604176390_1spoishan_4c.jpg ",
    image: "https://pbs.twimg.com/media/Fjmpz_xWQAAjVVD.jpg",
    id: "6"
  },
  {
    _id: "7c722928-e9b6-4cd1-b1c0-465a46787327",
    title: "Smriti Mandhana",
    videoId: "M3XPsovV4yg",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    creator: "Anand Kumar Gautam",
    image: "https://wallpapers.com/images/hd/smriti-mandhana-hd-after-a-match-wzq0rfouag0r9gy8.jpg",
    id: "7"
  },
  {
    _id: "80c97f1d-12f2-4761-b030-e2bc620c26f6",
    title: "Rohit Sharma",
    videoId: "02BdVJDh50s",
    creator: "Anand Kumar Gautam",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://assets.telegraphindia.com/telegraph/2022/Aug/1659478898_new-project-25.jpg",
    id: "8"
  },
  {
    _id: "71e2ffa3-aa4f-446c-bd01-cd7407b7c078",
    title: "Indian Crickter",
    videoId: "QW9hCo1r9B8",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    creator: "Niket Kumar Mishra",
    image: "https://m.economictimes.com/thumb/msid-95419287,width-1600,height-1069,resizemode-4,imgsize-152944/indian-cricket-team.jpg",
    id: "9"
  },
  {
    _id: "eed34e8d-0ed2-437e-8e18-e4113f44f1a6",
    title: "Indian Crickter",
    creator: "Anand Kumar Gautam",
    videoId: "UdBlnlXGneU",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://wallpapers.com/images/featured/g8wl4uwm62bu7830.jpg",
    id: "10"
  },
  {
    _id: "58679dbc-9ec7-44e6-9e3d-e7ec0ac1ea43",
    title: "Indian Crickter",
    videoId: "AFvw97oW8BU",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    creator: "Niket Kumar Mishra",
    image: "https://wallpapers.com/images/hd/indian-cricket-team-action-promo-b7ukx50hhybrms4m.jpg",
    id: "11"
  },
  {
    _id: "75123804-dd34-4e05-9439-4d9936c25923",
    title: "Priya Puniya",
    creator: "Anand Kumar Gautam",
    videoId: "dqCz9vR_9pE",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://qph.cf2.quoracdn.net/main-qimg-c734c9ff44208b990b47b36267ca1990-lq",
    id: "12"
  },
  {
    _id: "49809b0f-90d9-43aa-8768-d86d878ad9a4",
    title: "Smriti Mandhana",
    videoId: "v1fahYxFFLA",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    creator: "Niket Kumar Mishra",
    image: "https://qph.cf2.quoracdn.net/main-qimg-3edbf8b6f5f635438ac42da826b26ee2-lq",
    id: "13"
  },
  {
    _id: "7746c4e2-0d45-4ce3-96f5-5429e3c6eef2",
    title: "Mithali Raj",
    creator: "Anand Kumar Gautam",
    videoId: "JCjLBrrjgXk",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://static.abplive.com/wp-content/uploads/2020/03/05200633/Mithali-Raj.jpg",
    id: "14"
  },
  {
    _id: "03614da1-6025-432f-84cc-935bd8394476",
    title: "Smriti Mandhana",
    videoId: "0eV2Hol6H-4&t=2s",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    creator: "Niket Kumar Mishra",
    image: "https://images.news18.com/ibnlive/uploads/2021/06/1624584473_smiriti-mandhana-825x510.jpg",
    id: "15"
  },
  {
    _id: "bebdbb05-2eba-4824-940e-cfd900256225",
    title: "harleen Deol",
    creator: "Anand Kumar Gautam",
    videoId: "https://www.youtube.com/results?search_query=harleen+deol+catch",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://indianhotdeal.com/wp-content/uploads/2023/03/HARLEEN-DEOL-BIOGRAPHY_11zon.jpg",
    id: "16"
  },
  {
    _id: "df4c71b2-9e0d-422c-ae75-00dd08e78707",
    title: "Ellyse Perry",
    videoId: "65Ur1J7I8iQ",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    creator: "Niket Kumar Mishra",
    image: "https://cdn.wisden.com/wp-content/uploads/2016/09/GettyImages-482828233-scaled.jpg",
    id: "17"
  },
  {
    _id: "e89b576f-ba66-436c-b792-a587241ab185",
    title: "Virat Kohli Jasprit Bumrah",
    videoId: "gL_LIAm22Mc&t=150s",
    creator: "Anand Kumar Gautam",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://wallpapers.com/images/hd/indian-cricket-jasprit-bumrah-and-virat-kohli-oa8xlcxka6ulhzpa.jpg",
    id: "18"
  },
  {
    _id: "c4b158d2-8043-49be-a4a0-c59d5330bc3c",
    title: "Bhuvneshwar Kumar",
    videoId: "xaN0s-aVkkU",
    creator: "Anand Kumar Gautam",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://www.mykhel.com/img/2017/10/bhuvneshwar-kumar-celebrates-26-1508999588.jpg",
    id: "19"
  },
  {
    _id: "dabace54-4354-447b-a1f5-97d59e89e5fc",
    title: " Jasprit Bumrah",
    videoId: "gL_LIAm22Mc&t=184s",
    creator: "Anand Kumar Gautam",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://wallpaperaccess.com/full/6050039.jpg",
    id: "20"
  },
  {
    _id: "7d71aa95-0b56-441e-b213-48e21a1f9777",
    title: " MSD",
    creator: "Anand Kumar Gautam",
    videoId: "PPgtFMUu-lc&t=1s",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://static.india.com/wp-content/uploads/2023/02/FotoJet-2023-02-18T085251.466.jpg?impolicy=Medium_Resize&w=1200&h=800",
    id: "21"
  },
  {
    _id: "75e27049-72f4-4df8-bbfe-695e24e26122",
    title: "Smriti Mandhana",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    creator: "Anand Kumar Gautam",
    videoId: "PPgtFMUu-lc",
    image: "https://akm-img-a-in.tosshub.com/lingo/itne/images/story/202302/mandhanaf-sixteen_nine.jpg?size=1200:675",
    id: "22"
  },
  {
    _id: "f6c1b4d7-50f5-42da-a4dc-74203714d79b",
    title: "Mahendra Singh Dhoni",
    creator: "Anand Kumar Gautam",
    videoId: "8bAzfT0dDGY",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://www.hdimages.pics/images/quotes/english/general/ms-dhoni-hd-picture-52650-312806.jpg",
    id: "23"
  },
  {
    _id: "d68276ff-c67d-4db1-aed7-52bc7ea16aca",
    title: "Mahendra Singh Dhoni",
    creator: "Anand Kumar Gautam",
    videoId: "fLbGIW70QRo",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://i.pinimg.com/originals/ee/e5/97/eee5972109eddf15c205a577e1080ce2.jpg",
    id: "24"
  },
  {
    _id: "b015b5e2-8b80-40ec-b57b-3b6fca62f2e5",
    title: "Virat Kohli",
    creator: "Anand Kumar Gautam",
    videoId: "8K-QBBv2OQ0",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://www.mykhel.com/img/2018/10/viratkohli-cropped_enb1383spzof1285xkhtckgld.jpg",
    id: "25"
  },
  {
    _id: "578446bd-e1dd-4885-829b-396064efcaf5",
    title: "Shubhaman Gill",
    videoId: "rdSLBtz9ZhQ",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    creator: "Anand kumar Gautam",
    image: "https://www.insidesport.in/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-18-at-6.17.23-PM.jpeg?w=809",
    id: "26"
  },
  {
    _id: "460ec457-4eaa-4083-b110-6c508a88540d",
    title: "Ishan Kishan",
    creator: "Anand Kumar Gautam",
    videoId: "-CoTnFNSfG8",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://www.sportsunfold.com/wp-content/uploads/2022/08/pasted-image-0-38-7.png",
    id: "27"
  },
  {
    _id: "cc78b573-6e6f-4668-9de7-c85c409356d1",
    title: "Smriti Mandhana",
    videoId: "M3XPsovV4yg",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    creator: "Anand Kumar Gautam",
    image: "https://cricket.upcomingwiki.com/public/images/gallery/90653.png",
    id: "28"
  },
  {
    _id: "688108fe-199f-4f27-8e99-6ea20a3f0d9b",
    title: "Rohit Sharma",
    videoId: "KJm2lqHk2dw",
    creator: "Anand Kumar Gautam",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://assets.telegraphindia.com/telegraph/2022/Aug/1659478898_new-project-25.jpg",
    id: "29"
  },
  {
    _id: "0e7f6ea8-4242-4aac-83b0-0c946015d87c",
    title: "Indian Crickter",
    videoId: "QW9hCo1r9B8",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    creator: "Niket Kumar Mishra",
    image: "https://m.economictimes.com/thumb/msid-95419287,width-1600,height-1069,resizemode-4,imgsize-152944/indian-cricket-team.jpg",
    id: "30"
  },
  {
    _id: "3c695aab-3601-4894-aa2a-f61ac472a875",
    title: "Indian Crickter",
    creator: "Anand Kumar Gautam",
    videoId: "UdBlnlXGneU",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://wallpapers.com/images/featured/g8wl4uwm62bu7830.jpg",
    id: "31"
  },
  {
    _id: "3690021c-85f9-431f-8230-959a330ec742",
    title: "Indian Crickter",
    videoId: "AFvw97oW8BU",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    creator: "Niket Kumar Mishra",
    image: "https://wallpapers.com/images/hd/indian-cricket-team-action-promo-b7ukx50hhybrms4m.jpg",
    id: "32"
  },
  {
    _id: "d5654fd0-0474-47c6-a9f5-3224d557b6c0",
    title: "Priya Puniya",
    creator: "Anand Kumar Gautam",
    videoId: "dqCz9vR_9pE",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://qph.cf2.quoracdn.net/main-qimg-c734c9ff44208b990b47b36267ca1990-lq",
    id: "33"
  },
  {
    _id: "7fdbed66-5b5d-4b32-9c61-78797d7e5bbc",
    title: "Smriti Mandhana",
    videoId: "v1fahYxFFLA",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    creator: "Niket Kumar Mishra",
    image: "https://qph.cf2.quoracdn.net/main-qimg-3edbf8b6f5f635438ac42da826b26ee2-lq",
    id: "34"
  },
  {
    _id: "b738c092-d1d6-4c97-abf3-b69558af60ae",
    title: "Mithali Raj",
    creator: "Anand Kumar Gautam",
    videoId: "JCjLBrrjgXk",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://static.abplive.com/wp-content/uploads/2020/03/05200633/Mithali-Raj.jpg",
    id: "35"
  },
  {
    _id: "3b121b8b-f9ec-442a-874c-dc6a7fc09cae",
    title: "Smriti Mandhana",
    videoId: "m3iU3GJ15PI",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    creator: "Niket Kumar Mishra",
    image: "https://images.news18.com/ibnlive/uploads/2021/06/1624584473_smiriti-mandhana-825x510.jpg",
    id: "36"
  },
  {
    _id: "235067ea-2f4a-48d3-ad47-fb73b3f18dd4",
    title: "harleen Deol",
    creator: "Anand Kumar Gautam",
    videoId: "https://www.youtube.com/results?search_query=harleen+deol+catch",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://cricgram.b-cdn.net/wp-content/uploads/2023/03/Harleen-Deol.jpg",
    id: "37"
  },
  {
    _id: "4cfe6e3f-a424-48a7-bbf6-132a92a77dfa",
    title: "Ellyse Perry",
    videoId: "FpQp8Dsg3iI",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    creator: "Niket Kumar Mishra",
    image: "https://cdn.wisden.com/wp-content/uploads/2016/09/GettyImages-482828233-scaled.jpg",
    id: "38"
  },
  {
    _id: "54ae3678-6cbf-4afb-8eb2-6dadfd24b503",
    title: "Virat Kohli Jasprit Bumrah",
    videoId: "gL_LIAm22Mc&t=150s",
    creator: "Anand Kumar Gautam",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://wallpapers.com/images/hd/indian-cricket-jasprit-bumrah-and-virat-kohli-oa8xlcxka6ulhzpa.jpg",
    id: "39"
  },
  {
    _id: "ec65cd75-ea71-42b7-915c-d2725d1b765e",
    title: "Bhuvneshwar Kumar",
    videoId: "xaN0s-aVkkU",
    creator: "Anand Kumar Gautam",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ",
    image: "https://www.mykhel.com/img/2017/10/bhuvneshwar-kumar-celebrates-26-1508999588.jpg",
    id: "40"
  },


]