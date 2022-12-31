const secondToMinSec = (value) => {
    return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : '00')
}

export default secondToMinSec