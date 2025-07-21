export const kConverter = (num) => {
    if (num >= 1000) {
        // actual answer 1.234 toFixed(1) => 1.2
        return (num / 1000).toFixed(1)  + "k"
    }else{
        return num
    }
}