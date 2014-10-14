{* Filter button which will be included in the "listing/listing_actions.tpl" *}
{namespace name="frontend/listing/listing_actions"}

{block name="frontend_listing_actions_filter_button"}

	{if $sPropertiesOptionsOnly|@count or $sSuppliers|@count>1 && $sCategoryContent.parent != 1}

		<div class="action--filter-btn">
			<a href="#"
			   class="filter--trigger btn is--primary"
			   data-collapseTarget=".action--filter-options"
			   data-offcanvas="true"
			   data-offCanvasSelector=".action--filter-options"
			   data-closeButtonSelector=".filter--close-btn">
				<i class="icon--filter"></i> {s name='ListingFilterButton'}Filter{/s}
			</a>
		</div>

	{/if}

{/block}