# Generated by Django 4.1.4 on 2023-01-14 06:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('freelancer', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_name', models.CharField(max_length=30)),
                ('project_description', models.CharField(max_length=500)),
                ('date_of_completion', models.DateField(auto_now_add=True)),
                ('project_type', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='freelancer.skills')),
            ],
        ),
    ]
