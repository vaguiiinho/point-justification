import axios from 'axios'

import $ from 'jquery';
window.$ = window.jQuery = $;
axios.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
