import{_ as e,c as s,o as a,e as n}from"./app-D7xdoRJX.js";const i={},t=n(`<h1 id="postgres-no-zabbix" tabindex="-1"><a class="header-anchor" href="#postgres-no-zabbix"><span>Postgres no Zabbix</span></a></h1><h4 id="configuracao-no-postgres" tabindex="-1"><a class="header-anchor" href="#configuracao-no-postgres"><span>Configuração no Postgres</span></a></h4><p>Crie um usuário para o zabbix no postgres</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE USER zbx_monitor WITH PASSWORD &#39;xxxxx&#39; INHERIT;</span>
<span class="line">GRANT pg_monitor TO zbx_monitor;</span>
<span class="line"></span>
<span class="line">Edite o arquivo **pg_hba.conf**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vim /var/lib/pgsql/data/pg_hba.conf</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">Acrescente as linhas abaixo</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>host all zbx_monitor 127.0.0.1/32 trust host all zbx_monitor 0.0.0.0/0 md5 host all zbx_monitor ::0/0 md5</p><p>... local all</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line"></span>
<span class="line">Restart o servidor postgresql</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>systemctl restart postgresql.service</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">Teste a conexão com o novo usuário</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>sudo -u postgres --username=zbx_monitor postgres</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">&gt; O sistema não deve pedir senha</span>
<span class="line"></span>
<span class="line">&gt; Finalizada a configuração por parte do Postgres</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">#### Configuração no zabbix_agent</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[t];function r(d,o){return a(),s("div",null,l)}const p=e(i,[["render",r],["__file","28-zabbix-postgres.html.vue"]]),m=JSON.parse('{"path":"/kubernetes/28-zabbix-postgres.html","title":"Postgres no Zabbix","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1732281297000,"contributors":[{"name":"Celso Nery","email":"celso.nery@gmail.com","commits":1}]},"filePathRelative":"kubernetes/28-zabbix-postgres.md"}');export{p as comp,m as data};
