import Vue from 'vue'; // eslint-disable-line
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

<% options.packs.forEach(({package, icons}) => { %>
  <% if (icons) { %>
    <% icons.forEach((icon) => { %>
      import <%=icon%> from '<%=package%>/<%=icon%>';
    <% }) %>
  <% } else { %>
    import <%=package.split(/[\s\/]+/)[1].replace(/-/g, "")%> from '<%=package%>';
  <% } %>
<% }) %>

fontawesome.config = {
  autoAddCss: false,
};

<% options.packs.forEach(({package, icons}) => { %>
<% if (icons) { %>
    fontawesome.library.add(<%=icons.join(',')%>);
  <% } else { %>
    fontawesome.library.add(<%=package.split(/[\s\/]+/)[1].replace(/-/g, "")%>);
  <% } %>
<% }) %>

Vue.component('<%=options.componentName%>', FontAwesomeIcon);
