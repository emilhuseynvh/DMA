const findZone = () => {
    const exp = localStorage.getItem('experience')
    const edu = localStorage.getItem('education')
    if(exp === 0 && edu === 0 || exp === 0 && edu === 1) return 0
    else if(exp === 1 && edu === 0 || exp === 1 && edu === 1 || exp === 0 && edu === 2) return 1
    else if(exp === 3 && edu === 3 || exp === 3 && edu === 4) return 3
    else if(exp === 4 && edu === 4 || exp === 4 && edu === 3) return 4
    else return 2
}

export default findZone