const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', () => {
    const authorizationEndpoint = 'https://esignet.ltsstaging.fayda.et/authorize';
    const clientId = '419258';
    const redirectUri = 'http://localhost:3000/callback.html';
    const state='string'
    const nonce='string'
    const transactionId='k34RJudx8gD_B-vcRlHW8ZgONnI4d076I-BboPsAbx0'

    const queryParams = new URLSearchParams({
        client_id: clientId,
        redirect_uri: redirectUri,
        response_type: 'code',
        nonce:nonce,
        scope: 'openid profile',
        transactionId: transactionId,
        state:state
    });

    window.location.href = `${authorizationEndpoint}?${queryParams}#CnsKCiAgICJ0cmFuc2FjdGlvbklkIjoiX044TUhlWGVHNThTVTM0UUpoYWx5Rm9UR3M4YjBoMnJJdGRCS2gzR1pPYyIsCgogICAibG9nb1VybCI6Imh0dHBzOi8vaWQuZ292LmV0L3N0YXRpYy9tZWRpYS9sb2dvX3doaXRlLmE3ZGE4MDNhY2QyZDRlY2EwNWJhLnBuZyIsCgogICAiYXV0aEZhY3RvcnMiOlsKCiAgICAgIFsKCiAgICAgICAgIHsKCiAgICAgICAgICAgICJ0eXBlIjoiT1RQIiwKCiAgICAgICAgICAgICJjb3VudCI6MCwKCiAgICAgICAgICAgICJzdWJUeXBlcyI6bnVsbAoKICAgICAgICAgfQoKICAgICAgXSwKCiAgICAgIFsKCiAgICAgICAgIHsKCiAgICAgICAgICAgICJ0eXBlIjoiQklPIiwKCiAgICAgICAgICAgICJjb3VudCI6MSwKCiAgICAgICAgICAgICJzdWJUeXBlcyI6bnVsbAoKICAgICAgICAgfQoKICAgICAgXQoKICAgXSwKCiAgICJhdXRob3JpemVTY29wZXMiOlsKCiAgICAgIAoKICAgXSwKCiAgICJlc3NlbnRpYWxDbGFpbXMiOlsKCiAgICAgICJlbWFpbCIKCiAgIF0sCgogICAidm9sdW50YXJ5Q2xhaW1zIjpbCgogICAgICAiYmlydGhkYXRlIiwKCiAgICAgICJhZGRyZXNzIiwKCiAgICAgICJnZW5kZXIiLAoKICAgICAgInBob25lIiwKCiAgICAgICJuYW1lIiwKCiAgICAgICJwaWN0dXJlIgoKICAgXSwKCiAgICJjb25maWdzIjp7CgogICAgICAic2JpLmVudiI6IkRldmVsb3BlciIsCgogICAgICAic2JpLnRpbWVvdXQuRElTQyI6MzAsCgogICAgICAic2JpLnRpbWVvdXQuRElORk8iOjMwLAoKICAgICAgInNiaS50aW1lb3V0LkNBUFRVUkUiOjMwLAoKICAgICAgInNiaS5jYXB0dXJlLmNvdW50LmZhY2UiOjEsCgogICAgICAic2JpLmNhcHR1cmUuY291bnQuZmluZ2VyIjoxLAoKICAgICAgInNiaS5jYXB0dXJlLmNvdW50LmlyaXMiOjEsCgogICAgICAic2JpLmNhcHR1cmUuc2NvcmUuZmFjZSI6NzAsCgogICAgICAic2JpLmNhcHR1cmUuc2NvcmUuZmluZ2VyIjo3MCwKCiAgICAgICJzYmkuY2FwdHVyZS5zY29yZS5pcmlzIjo3MCwKCiAgICAgICJyZXNlbmQub3RwLmRlbGF5LnNlY3MiOjEyMCwKCiAgICAgICJzZW5kLm90cC5jaGFubmVscyI6ImVtYWlsLHBob25lIiwKCiAgICAgICJjYXB0Y2hhLnNpdGVrZXkiOiJzaXRla2V5IiwKCiAgICAgICJjYXB0Y2hhLmVuYWJsZSI6IiIsCgogICAgICAiYXV0aC50eG5pZC5sZW5ndGgiOiIxMCIsCgogICAgICAiY29uc2VudC5zY3JlZW4udGltZW91dC1pbi1zZWNzIjo2MDAsCgogICAgICAiY29uc2VudC5zY3JlZW4udGltZW91dC1idWZmZXItaW4tc2VjcyI6NSwKCiAgICAgICJsaW5rZWQtdHJhbnNhY3Rpb24tZXhwaXJlLWluLXNlY3MiOjEyMCwKCiAgICAgICJzYmkucG9ydC5yYW5nZSI6IjQ1MDEtNDYwMCIsCgogICAgICAic2JpLmJpby5zdWJ0eXBlcy5pcmlzIjoiVU5LTk9XTiIsCgogICAgICAic2JpLmJpby5zdWJ0eXBlcy5maW5nZXIiOiJVTktOT1dOIiwKCiAgICAgICJ3YWxsZXQucXItY29kZS1idWZmZXItaW4tc2VjcyI6MTAsCgogICAgICAib3RwLmxlbmd0aCI6NiwKCiAgICAgICJwYXNzd29yZC5yZWdleCI6IiIsCgogICAgICAid2FsbGV0LmNvbmZpZyI6WwoKICAgICAgICAgewoKICAgICAgICAgICAgIndhbGxldC5uYW1lIjoiSW5qaSBNb2JpbGUgQXBwIiwKCg==`;
});
