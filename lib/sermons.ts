export type Sermon = {
  id: number | string;
  title: string;
  drive_url: string;
  image_path?: string;
};

export const Sermons: Sermon[] = [
  {
    id: 1,
    title: "The Baptism Of The HolyGhost",
    drive_url:
      "https://drive.google.com/drive/folders/1-GHvo_qG6WluN6q6Qmv-PPptqwUQyP2A?usp=sharing",
    image_path: "/images/sermons/1.jpg",
  },
  {
    id: 2,
    title: "Getting The Job Done",
    drive_url:
      "https://drive.google.com/drive/folders/1-5e1E7zvx2TARRBxNhV2pztVcCJ2uOkS?usp=sharing",
    image_path: "/images/sermons/2.jpg",
  },
  {
    id: 3,
    title: "You are the Light Of The World",
    drive_url:
      "https://drive.google.com/drive/folders/1-AwSWl0tycY-g53lOW3ZG4o6WdXtUg1i?usp=sharing",
    image_path: "/images/sermons/3.jpg",
  },
];
