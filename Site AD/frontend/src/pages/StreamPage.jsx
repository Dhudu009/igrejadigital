import React from 'react';

// import { Container } from './styles';

function Stream() {
  return <div>
      <section class="section">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h1>Culto Online</h1>
				</div>
				<div class="col-lg-12 video-culto-online">
					<iframe
						data-src="https://www.youtube.com/embed/gaSMBef_Q8c?wmode=transparent&amp;autoplay=1&amp;theme=dark&amp;controls=1&amp;autohide=0&amp;loop=1&amp;showinfo=0&amp;rel=0&amp;playlist=gaSMBef_Q8c&amp;enablejsapi=0"
						src="https://www.youtube.com/embed/gaSMBef_Q8c?wmode=transparent&amp;autoplay=1&amp;theme=dark&amp;controls=1&amp;autohide=0&amp;loop=1&amp;showinfo=0&amp;rel=0&amp;playlist=gaSMBef_Q8c&amp;enablejsapi=0"
						title="External YouTube" aria-label="External YouTube" data-testid="youtube" allowfullscreen=""
						width="100%" height="100%" frameborder="0"></iframe>
				</div>
				<div class="col-lg-12 text-center">
					<p>
					<h3>Programação AD JAIARA WEBTV:</h3>
					</p>
					<p><b>Domingo</b> - Culto às 10:00h, 18:00h e 20:00h</p>
					<p><b>Terça</b> - Culto às 19:30h</p>
					<p><b>Quinta</b> - Culto às 19:30h</p>
				</div>
			</div>
		</div>
	</section>
  </div>;
}

export default Stream;