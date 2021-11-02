import urllib.request, json
import pandas as pd
import plotly.graph_objects as go


with urllib.request.urlopen("https://raw.githubusercontent.com/kim785/Project2/main/static/dump_summary_dict.json") as url:
    data = json.loads(url.read().decode())

df = pd.DataFrame.from_dict(pd.json_normalize(data))

df.drop('description',axis=1,inplace=True)

ordered_months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"]

df_list = []


for month in ordered_months:
    df_filtered = df[df['crime_month_name'] == month]
    df_filtered = df_filtered.groupby(['crime_month_name','primary_type'], as_index=False)['reported_crime'].sum()

    df_filtered = df_filtered.sort_values(by='reported_crime',ascending=False)
    df_filtered = df_filtered.head(10)
    df_list.append(df_filtered)

df = pd.concat(df_list)

colors = {}

colors_list=['#e6194B','#3cb44b','#ffe119','#4363d8','#f58231','#911eb4','#42d4f4','#f032e6','#bfef45','#fabed4','#469990']


for type, color in zip(df['primary_type'].unique(), range(12)):
    colors[type] = colors_list[color]


fig = go.Figure()

for type in df['primary_type'].unique():
    df_filtered = df[df['primary_type'] == type]
    fig.add_trace(go.Bar(x=df_filtered['crime_month_name'],
                         y=df_filtered['reported_crime'],
                         name=type,
                         marker=dict(color=colors[type])
                         )
                )

fig.update_layout(
    title_text="Chicago Crime 2020",
    title_x=0.5,
    title_font_size=50,
    paper_bgcolor='#F0F8FF',
    plot_bgcolor='#F0F8FF',
    font_family='Ubuntu',
    font_color='#000',
    font_size=28,
    legend_font_size=18,
    margin=dict(
        l=200,
        r=150,
        t=150,
        b=150,
        pad=20
    ),
    xaxis=dict(title="Months"),
    yaxis=dict(title="Top 10 Crimes Reported"),
    barmode='stack'
)

fig.update_xaxes(showgrid=False,zeroline=False)
fig.update_yaxes(showgrid=False,zeroline=False)

fig.show()
