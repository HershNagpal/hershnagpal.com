import txtImage from './assets/images/icons/text.svg';
import pdfImage from './assets/images/icons/pdf.svg';
import linkImage from './assets/images/icons/link.svg';
import folderImage from './assets/images/icons/folder.svg'
import resume from './assets/content/HNagpal-Resume.pdf';

export const iconData = [
    {
        id: 0,
        title: "welcome.txt",
        type: "txt",
        content: "",
    },
    {
        id: 1,
        title: "about me.txt",
        type: "txt",
        content: "",
    },
    {
        id: 2,
        title: "projects.txt",
        type: "txt",
        content: "",
    },
    {
        id: 3,
        title: "resume.pdf",
        type: "pdf",
        content: resume,
    },
    {
        id: 4,
        title: "linkedin.com",
        type: "ie",
        content: "https://www.linkedin.com/in/hershnagpal/",
    },
    {
        id: 5,
        title: "instagram.com",
        type: "ie",
        content: "https://www.instagram.com/wafer_wave/",
    },    
    // {
    //     id: 6,
    //     title: "documents",
    //     type: "folder",
    //     content: "",
    // },
];

const iconImageMap = [
    txtImage,
    txtImage,
    txtImage,
    pdfImage,
    linkImage,
    linkImage,
    // folderImage,
];

export const findImageSource = (id) => iconImageMap[id];
