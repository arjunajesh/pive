# Generated by Django 4.2.3 on 2023-07-22 21:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('stores', '0001_initial'),
        ('product', '0006_product_featured'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productstoreinfo',
            name='store',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='stores.store'),
        ),
    ]
