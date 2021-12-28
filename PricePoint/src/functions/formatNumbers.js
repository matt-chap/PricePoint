export const roundtoThePlace = (num, place) => {
    if(!place){
        place = 2
    }
    let roundFactor = Math.pow(100, place)
    return Math.round((num + Number.EPSILON) * roundFactor) / roundFactor
}