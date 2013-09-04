<header>

	<nav class='row collapse for-desktop hide-for-small'>
	
		<div class='large-4 columns'><a href='#'><img src='images/logo.gif' class='logo' alt='Cashhimi Logo'></a></div>
		<div class='large-8 columns'>
	
			
			<ul class='row collapse' id='desktop-nav'>
				<li class='large-2 text-left'><a href='#'>SHOP</a>
					<div class='subnav'>
							<ul>
								<li class=''><a href='#'>ALL</a></li>
							</ul>
							<ul class='clear'>
								<li><a href='#' class='current-subnav'>HANDBAGS</a></li>
								<li class=''><a href='#'>CROSSBODY BAGS</a></li>
								<li class=''><a href='#'>SHOULDER BAGS</a></li>
								<li class=''><a href='#'>CLUTCHES</a></li>
								<li class=''><a href='#'>TOTES</a></li>
								<li class=''><a href='#'>EXOTICS</a></li>						
							</ul>
							<ul class='clear'><li><a href='#'>SHOES</a></li></ul>
	
							<ul class='clear'><li><a href='#'>ACCESSSORIES</a></li></ul>
							
							<ul class='clear'><li><a href='#'>SALE</a></li></ul>
					</div>
				</li>
				<li class='large-2 text-left'><a href='#'>ABOUT		</a></li>
				<li class='large-2 text-left'><a href='#'>LOOKBOOK	</a></li>
				
				<li class='large-2 text-left'><a href='#'>PRESS</a>
					<div class='subnav'>
							<ul class='clear'><li><a href='#' class='current-subnav'>EDITORIAL</a></li></ul>
	
							<ul class='clear'><li><a href='#'>BLOGGER</a></li></ul>
							
							<ul class='clear'><li><a href='#'>RUNWAY</a></li></ul>
					</div>
				</li>
				
				<li class='large-2 text-left'><a href='#'>STORES		</a></li>
				<li class='large-2 text-right'><a href='#' class='shopping-bag'><span class='shopping-bag-handle'></span>2</a></li>
			</ul>
	
		</div>
	</nav>

</header>

<div class='container'>
	<div class='fixed'>
	<div class='hide-for-medium-up top-bar row collapse'><div class='small-6 columns text-left'><a href="#" id='trigger'>Menu</a></div><div class='small-6 columns text-right'>
		<a href='#' class='shopping-bag'><span class='shopping-bag-handle'></span>2</a>
	</div></div>
	</div>
	
	<!-- Push Wrapper -->
	<div class="mp-pusher" id="mp-pusher">

		<!-- mp-menu -->
		<nav id="mp-menu" class="hide-for-medium-up mp-menu for-mobile">
			<div class="mp-level">
				<ul>
					<li class="icon icon-arrow-left">
						<a href="#">SHOP</a>
						<div class="mp-level">
							<h2>SHOP</h2>
							<ul>
								<li class="icon icon-arrow-left">
									<a href="#">ALL</a>
								</li>
								<li class="icon icon-arrow-left">
									<a class='current-subnav' href="#">HANDBAGS</a>
								</li>
								<li class="icon icon-arrow-left">
									<a href="#">CROSSBODY BAGS</a>
								</li>
								<li class="icon icon-arrow-left">
									<a href="#">SHOULDER BAGS</a>
								</li>
								<li class="icon icon-arrow-left">
									<a href="#">CLUTCHES</a>
								</li>
								<li class="icon icon-arrow-left">
									<a href="#">TOTES</a>
								</li>
								<li class="icon icon-arrow-left">
									<a href="#">EXOTICS</a>
								</li>
								<li class="icon icon-arrow-left">
									<a href="#">SHOES</a>
								</li>
								<li class="icon icon-arrow-left">
									<a href="#">ACCESSORIES</a>
								</li>
								<li class="icon icon-arrow-left">
									<a href="#">SALE</a>
								</li>
							</ul>
						</div>
					</li>
					<li class="icon icon-arrow-left">
						<a href="#">ABOUT</a>
					</li>
					<li class="icon icon-arrow-left">
						<a href="#">LOOKBOOK</a>
					</li>
					<li class="icon icon-arrow-left">
						<a href="#">PRESS</a>
						<div class="mp-level">
							<h2>PRESS</h2>
							<ul>
								<li class="icon icon-arrow-left">
									<a href="#">EDITORIAL</a>
								</li>
								<li class="icon icon-arrow-left">
									<a href="#">BLOGGER</a>
								</li>
								<li class="icon icon-arrow-left">
									<a href="#">RUNWAY</a>
								</li>
							</ul>
						</div>
					</li>
					<li class="icon icon-arrow-left">
						<a href="#">STORES</a>
					</li>
				</ul>
			</div>
		</nav>
		<!-- /mp-menu -->
		
		
		<!--- Scroller: body content needs to go in here to support the push effect. It's as if div.scroller takes the place of body (so we'll put the other includes here as well. -->
		<div class="scroller"><!-- this is for emulating position fixed of the nav -->
			<div class="scroller-inner">

				
				<? 
					//here we figure out what page this is and grab the body include
					$parsed = parse_url($_SERVER['SCRIPT_NAME']); 
					require(end(explode("/",$parsed['path'])).".content.inc");

				?>
				
				
				<? require("all_pages_footer.inc"); ?>
				
				<? require("all_pages_before_body_end.inc"); ?>
				
			</div><!-- /scroller-inner -->
		</div><!-- /scroller -->
		
		

	</div><!-- /pusher -->
</div> 
  