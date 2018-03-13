import Vue from 'vue'; // eslint-disable-line
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
<% options.packs.forEach(({package, icons}) => { %>
  <% if (icons) { %>
    import  { <%=icons.join(',')%> } from '<%=package%>';
  <% } else { %>
    import <%=package.split(/[\s\/]+/)[1].replace(/-/g, "")%> from '<%=package%>';
  <% } %>
<% }) %>

<% options.packs.forEach(({package, icons}) => { %>
<% if (icons) { %>
    fontawesome.library.add(<%=icons.join(',')%>);
  <% } else { %>
    fontawesome.library.add(<%=package.split(/[\s\/]+/)[1].replace(/-/g, "")%>);
  <% } %>
<% }) %>

Vue.component('<%=options.componentName%>', FontAwesomeIcon);
