import txtImage from './assets/images/icons/txt.png'
import pdfImage from './assets/images/icons/doc.png'
import ieImage from './assets/images/icons/ie.png'
import folderImage from './assets/images/icons/folder.png'
import aboutImage from './assets/images/icons/about.png'
import resume from './assets/content/HNagpal-Resume.pdf'

export const iconData = [
    null,
    {
        id: 1,
        title: "welcome.txt",
        type: "text",
        content: "",
    },
    {
        id: 2,
        title: "about me.txt",
        type: "txt",
        content: "",
    },
    {
        id: 3,
        title: "projects.txt",
        type: "txt",
        content: "",
    },
    {
        id: 4,
        title: "resume.pdf",
        type: "pdf",
        content: resume,
    },
    {
        id: 5,
        title: "linkedin.com",
        type: "ie",
        content: "https://www.linkedin.com/in/hershnagpal/",
    },
    {
        id: 6,
        title: "instagram.com",
        type: "ie",
        content: "https://www.instagram.com/wafer_wave/",
    },
]

const iconImageMap = [
    null,
    txtImage,
    txtImage,
    txtImage,
    pdfImage,
    ieImage,
    ieImage,
]

export const findImageSource = (id) => iconImageMap[id]