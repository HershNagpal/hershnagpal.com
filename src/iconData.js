import txtImage from './assets/images/icons/text.svg'
import pdfImage from './assets/images/icons/pdf.svg'
import linkImage from './assets/images/icons/link.svg'
import folderImage from './assets/images/icons/folder.svg'
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
    linkImage,
    linkImage,
]

export const findImageSource = (id) => iconImageMap[id]