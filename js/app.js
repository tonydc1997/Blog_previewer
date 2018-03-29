$('#flashMessage').hide();

$('#previewButton').click( () => {
  const title = $('#blogTitleInput').val();
  const content = $('#blogContentInput').val();

  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').html(content);

  $('#flashMessage')
  .slideDown()
  .delay(3000)
  .slideUp();
});
