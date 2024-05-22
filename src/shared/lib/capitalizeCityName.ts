export const capitalizeCityName = (city: string) => {
    const firstLetter = city.charAt(0).toUpperCase();
    return `${firstLetter}${city.slice(1)}`
}