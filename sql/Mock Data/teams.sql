#Teams
INSERT INTO public.teams(
	team_id, team_name, short_hand, pitch_address)
	VALUES (gen_random_uuid (), 'Athlunkard Villa', 'AV', 'The Island');
INSERT INTO public.teams(
	team_id, team_name, short_hand, pitch_address)
	VALUES (gen_random_uuid (), 'Murroe AFC', 'MAFC', 'Murroe');
#Competitions
INSERT INTO public.competition(
	id, competition_name, is_knock_out)
	VALUES (gen_random_uuid (), 'Premier A', false);