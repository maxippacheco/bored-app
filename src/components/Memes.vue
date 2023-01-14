<template>
	<div class="container">
		<h1>Are you bored?</h1>
		<div class="button-align">
			<button @click="getActivity()">Click here</button>
		</div>
		<div class="resp">
			<span v-if="!isReady">Wait...</span>
			
			<div class="align">
				<span v-if="activity">{{ 'Activity: ' + activity }}</span>
				<span v-if="type">{{ 'Type: ' + type }}</span>
				<span v-if="participants">{{ 'Participants: ' + participants }}</span>
			</div>

		</div>
		

	</div>
</template>

<script>
export default {
	name: 'Memes',
	data(){
		return {
			activity: null,
			type: null,
			participants: null,
			isReady: true
		}
	},
	methods:{
		async getActivity(){
			this.isReady = false;
			
			this.activity = null;
			this.type = null;
			this.participants = null;

			const { type, activity, participants } = await fetch("https://www.boredapi.com/api/activity/").then( resp => resp.json() );

			this.isReady = true;

			this.activity = activity;
			this.type = type;
			this.participants = participants;
		}

	},
}
</script>

<style>
	.container{
		background-color: #41B883;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	h1{
		text-align: center;
		padding-bottom: 30px;
		font-size: 50px;
		color: #34495E;
	}
	.button-align{
		width: 100%;
		display: flex;
		justify-content: center;
	}
	button{
		width: 30%;
		padding: 10px;
		border: none;
		background-color: #34495E;
		color: white;
		border-radius: 20px;
		cursor: pointer;
	}
	.resp{
		text-align: center;
		padding-top: 60px;
		font-size: 30px;
		color: #34495E;
	}
	.align{
		display: flex;
		flex-direction: column;
	}
</style>