// language=hbs
const chatBoxTmpl = `
  <div class="box">
      <time class="box__date">19 июня</time>
      {{#each messages}}
          <div class="box__message">
              <div class="message{{#if message-right }} message-right{{/if}}{{#if message-left }} message-left{{/if}}{{# if message-secondary }} message-secondary{{/if}}{{#if image-src }} message-image{{/if}}">
                  {{#each texts}}
                    {{#if text }}<p>{{ text }}</p>{{/if}}
                  {{/each}}
                  {{#if image-src }}
                      <img src="{{ image-src }}" alt="{{ image-alt }}">
                  {{/if}}
                  {{#if message-date }}
                      <div class="message__info">
                          {{# if message-secondary }}
                              <div class="message__check message__check-delivery">
                                  <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <line y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33301)" stroke="#3369F3"/>
                                      <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5)" stroke="#3369F3"/>
                                      <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01587 5)" stroke="#3369F3"/>
                                  </svg>
                              </div>
                          {{/if}}
                          <time class="message__date">{{ message-date }}</time>
                      </div>
                  {{/if}}
              </div>
          </div>
      {{/each}}
      {{{ pop-up-action-user }}}
      {{{ pop-up-add-in-message }}}
  </div>
`;
export default chatBoxTmpl;
