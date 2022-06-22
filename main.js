	const _address = "0xAD0db7368CDFbd3153F7dfaCA51A78Eeb39F6d71";
	const _abi = JSON.parse('[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"gaccAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"gascAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"_currentPrice\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"_timeElapsed\",\"type\":\"uint256\"}],\"name\":\"MutantPublicSalePaused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"_saleDuration\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"_saleStartTime\",\"type\":\"uint256\"}],\"name\":\"MutantPublicSaleStart\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"_mintedMutantsStartingIndex\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"_megaMutantsStartingIndex\",\"type\":\"uint256\"}],\"name\":\"StartingIndicesSet\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MAX_MINTED_MUTANTS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"NUM_MEGA_MUTANTS\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PS_MAX_MUTANT_PURCHASE\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PS_MUTANT_ENDING_PRICE\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"SERUM_MUTATION_OFFSET\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"WL_MAX_MULTI_MUTANT_PURCHASE\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"WL_MAX_MUTANT_PURCHASE\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"WL_PRICE\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"apesMinted\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"collectionStartingIndexBlock\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMintPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"apeId\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"serumTypeId\",\"type\":\"uint8\"}],\"name\":\"getMutantIdForApeAndSerumCombination\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRemainingSaleTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"serumType\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"apeId\",\"type\":\"uint256\"}],\"name\":\"hasApeBeenMutatedWithType\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"apeId\",\"type\":\"uint256\"}],\"name\":\"isApeEligibleForSerumMutation\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"isMinted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"megaMutantsStartingIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"numMutants\",\"type\":\"uint256\"},{\"internalType\":\"bytes32[]\",\"name\":\"wlFreeMerkleProof\",\"type\":\"bytes32[]\"},{\"internalType\":\"bytes32[]\",\"name\":\"wlFreeMultiMerkleProof\",\"type\":\"bytes32[]\"}],\"name\":\"mintFreeWhitelist\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"numMutants\",\"type\":\"uint256\"}],\"name\":\"mintMutants\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"numMutants\",\"type\":\"uint256\"},{\"internalType\":\"bytes32[]\",\"name\":\"wlMerkleProof\",\"type\":\"bytes32[]\"},{\"internalType\":\"bytes32[]\",\"name\":\"wlMultiMerkleProof\",\"type\":\"bytes32[]\"}],\"name\":\"mintWhitelist\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"mintedMutantsStartingIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"serumTypeId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"apeId\",\"type\":\"uint256\"}],\"name\":\"mutateApeWithSerum\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"apeId\",\"type\":\"uint256\"}],\"name\":\"mutateApeWithoutSerum\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"numMutantsMinted\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pausePublicSale\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"presaleAddresses\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"publicSaleActive\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"publicSaleDuration\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"publicSaleMutantStartingPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"publicSaleStartTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"saleFreeWhitelistActive\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"saleWhitelistActive\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"serumMutationActive\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"uri\",\"type\":\"string\"}],\"name\":\"setBaseURI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_freeMultiWlMerkleRoot\",\"type\":\"bytes32\"}],\"name\":\"setFreeMultiWlMerkleRoot\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_freeWlMerkleRoot\",\"type\":\"bytes32\"}],\"name\":\"setFreeWlMerkleRoot\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_multiWlMerkleRoot\",\"type\":\"bytes32\"}],\"name\":\"setMultiWlMerkleRoot\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"setStartingIndices\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_wlMerkleRoot\",\"type\":\"bytes32\"}],\"name\":\"setWlMerkleRoot\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"saleDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"saleStartPrice\",\"type\":\"uint256\"}],\"name\":\"startPublicSale\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"toggleFreeWhiteListSaleActive\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"togglePublicSaleActive\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"toggleSerumMutationActive\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"toggleWhiteListSaleActive\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalApesMutated\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wlFreeMerkleRoot\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wlFreeMultiMerkleRoot\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wlMerkleRoot\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"wlMultiMerkleRoot\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]');
	const _web3 = new Web3('https://mainnet.infura.io/v3/1ad4d4675afc4320973f04b51e6ff006')
	_contract = new _web3.eth.Contract(_abi, _address);
	
	
	
	window.onload = function(){
	
	 document.getElementById("src-btn").addEventListener("click", hasApeMutated, false);
	 
	  totalApesMutated().then((n) => {	
		
		document.getElementById("numSpinner").remove();	
		document.getElementById("numMutates").innerHTML= n;
			
		 
		});

			
	}
	
	 async function hasApeMutated(){
		
	    document.getElementById("src-btn").blur();
		
		// check input
		gaccId = document.getElementById("gacc-nr").value;
		
		if (gaccId == null || gaccId == "")
		{
			document.getElementById("resultDiv").innerHTML = "<span class=\"bayc-color\"> no GACC number was entered</span>";
			return;
		}
		
		const parsed = parseInt(gaccId);
		if (isNaN(parsed)  || !(parsed >= 1 && parsed <= 5000) ) 
		{ 
		 document.getElementById("resultDiv").innerHTML = "<span class=\"bayc-color\">" + gaccId + " is not a valid GACC number</span>";
			return;
		}
		
	
		
		// set spinner
		document.getElementById("resultDiv").innerHTML = getSpinnerHTML();
		
		// get result
		x = await hasApeBeenMutated(parsed);
		document.getElementById("resultDiv").innerHTML = x;
	 }
	
	
	 function getSpinnerHTML(){
		
		return `
		<div class="d-flex justify-content-center"  style="color: #bfc500">
			<div class="spinner-border" role="status"></div>
		</div>
		`;
	}
	
	
	function getResultDivHTML(apeId, m1, m2, m1Num, m2Num, apeAsset, m1Asset, m2Asset){
	
	m1_text = "unknown";
	m2_text = "unknown";
	m1_img = "images/m1.png"
	m2_img = "images/m2.png"
	
	if(m1){
		m1_text = "M1 Used"
		
		if(m1Num){
		  m1_text += " (# " + m1Num + ")";
		}
		if(m1Asset){
			m1_img = m1Asset.image_preview_url;
		}
	}
	else{
		m1_text = "M1 Available"
	}
	
	if(m2){
		m2_text = "M2 Used";
		
		if(m2Num){
		  m2_text += " (# " + m2Num + ")";
		}
		if(m2Asset){
			m2_img = m2Asset.image_preview_url;
		}
		
	}
	else{
		m2_text = "M2 Available";
	}
	
		imgId = apeId + 1;
			
		return `
		<div class="row align-items-center">
			<div class="col ">
				<span>
				  GACC #${apeId}<br>
				</span>
				
			<img src="${apeAsset.image_preview_url}" style="height: 150px;"  alt="..." >
				
			</div>
			
			<div class="col">
			
			 <div class="row">
			   <div class="col">
			    <span>${m1_text}</span><br>
				<img src="${m1_img}"  style="height: 100px;" alt="m1 image" >
				 
			   </div>
			  </div>
			  
			<div class="row">
			   <div class="col">
			   <span>${m2_text}</span><br>
				<img src="${m2_img}"  style="height: 100px;" alt="m2 image" >
				
			  </div>
			 </div>
			  	
			  
			</div>
		</div>
		`;
	}
	
	
	async function hasApeBeenMutated(apeId){
	
	
	try {
        
		apeAsset = await fetchGaccOSasset(apeId);
		
		m1 = await hasApeBeenMutatedWithType(1, apeId);
		var m1Num;
		var m1Asset;
		if(m1){
			
			 m1Num = await getMutantIdForApeAndSerumCombination(apeId, 1)
			 m1Asset = await fetchMaccOSasset(m1Num);
		}
		
	 m2 = await hasApeBeenMutatedWithType(2, apeId);
	 var m2Num;
	 var m2Asset;
	 if(m2){
			
			 m2Num = await getMutantIdForApeAndSerumCombination(apeId, 2)
			  m2Asset = await fetchMaccOSasset(m2Num);
		}
	 
	 
	 return getResultDivHTML(apeId, m1, m2, m1Num, m2Num, apeAsset, m1Asset, m2Asset);
    } catch (e) {
        return e;
	}
	
	}
	
	async function hasApeBeenMutatedWithType(type, apeId){
	
	
	var mutated; 

			await _contract.methods.hasApeBeenMutatedWithType(type, apeId).call().then(function(result){
				
				mutated = result;
    
			}).catch(err => console.error(err));
			
	  return mutated;
	}
	
	async function getMutantIdForApeAndSerumCombination(apeId, serumTypeId){
	
	
	var mutated; 

			await _contract.methods.getMutantIdForApeAndSerumCombination(apeId, serumTypeId).call().then(function(result){
				
				mutated = result;
    
			}).catch(err => console.error(err));
			
	  return mutated;
	}
	
	
	async function totalApesMutated(){
	
	
	var num; 

			await _contract.methods.totalApesMutated().call().then(function(result){
				
				num = result;
    
			}).catch(err => console.error(err));
			
	  return num;
	}
	
	
	async function fetchGaccOSasset(apeId){

	var asset;		
	
		await fetch('https://api.opensea.io/api/v1/asset/0x4b103d07c18798365946e76845edc6b565779402/' + apeId)
		 .then(result1 => result1.json())
		 .then((output1) => {
        
			asset = output1;

		}).catch(err => console.error(err));


	return asset;	
	}
	
	
	async function fetchMaccOSasset(apeId){

	var asset;		
	
		await fetch('https://api.opensea.io/api/v1/asset/0xad0db7368cdfbd3153f7dfaca51a78eeb39f6d71/' + apeId)
		 .then(result1 => result1.json())
		 .then((output1) => {
        
			asset = output1;

		}).catch(err => console.error(err));


	return asset;	
	}
	

	
	
	
