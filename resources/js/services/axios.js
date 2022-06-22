import axios from 'axios'
import { baseUrl } from './config'
import $ from 'jquery';

window.$ = window.jQuery = $;
axios.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')

let employee = `${baseUrl}/employee`

export { employee }
