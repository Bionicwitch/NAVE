import { format } from "date-fns";

const formatDate= data => format(data, 'dd/mm/yyyy');

export {formatDate};