import 'dayjs/locale/ru';
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { pluralizedTimeUnits } from '../consts';
import { PluralizedUnits } from '../types';

dayjs.locale('ru');
dayjs.extend(duration);
dayjs.extend(relativeTime);

export const getFullTrainDate = (dateTime: number) => {
    return dayjs.unix(dateTime).format('DD.MM.YYYY')
}
export const getTrainTime = (dateTime: number) => {
    return dayjs.unix(dateTime).format('HH:mm');
}
export const getTrainDuration = (dateTime: number) => {
    let seconds = dateTime;
    const days = Math.floor(seconds / (24 * 3600));
    seconds %= (24 * 3600);
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    
    let timeFormat = "";
    
    // Функция для правильного склонения слова в зависимости от числа
    function pluralize(number:number, unit: PluralizedUnits) {
        if (number % 10 === 1 && number % 100 !== 11) {
            return pluralizedTimeUnits[unit]['one'];
        } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
            return pluralizedTimeUnits[unit]['few'];
        } else {
            return pluralizedTimeUnits[unit]['many'];
        }
    }
    
    if (days > 0) {
        timeFormat += days + " " + pluralize(days, PluralizedUnits['days']) + ", ";
    }
    
    timeFormat += hours + " " + pluralize(hours, PluralizedUnits['hours']) + ", ";
    timeFormat += minutes + " " + pluralize(minutes, PluralizedUnits['minutes']);
    
    return timeFormat;
}